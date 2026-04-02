import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { supabase } from '@/lib/supabase'

export const maxDuration = 60

// Topic seeds with categories — 20 distinct angles
const TOPIC_SEEDS = [
  { topic: 'How to dominate Etsy search with keyword research and SEO in 2024', category: 'Growth' },
  { topic: 'The complete formula for pricing handmade products to maximize profit', category: 'Pricing' },
  { topic: 'Natural light product photography for Etsy sellers on any budget', category: 'Photography' },
  { topic: 'How to use Pinterest to drive free, consistent traffic to your Etsy shop', category: 'Marketing' },
  { topic: 'Writing Etsy listing descriptions that turn browsers into buyers', category: 'Growth' },
  { topic: 'Surviving and thriving during the Etsy holiday season rush', category: 'Growth' },
  { topic: 'Email marketing for Etsy sellers: build a list that buys', category: 'Marketing' },
  { topic: 'From side hustle to full-time: the milestones every Etsy seller needs to hit', category: 'Stories' },
  { topic: 'Etsy Ads demystified: how to run profitable campaigns without guessing', category: 'Marketing' },
  { topic: 'Why charging more actually increases your Etsy sales: the psychology of pricing', category: 'Pricing' },
  { topic: 'The flat lay photography guide for Etsy product sellers', category: 'Photography' },
  { topic: 'How to turn one-time Etsy buyers into loyal repeat customers', category: 'Growth' },
  { topic: 'Competitive research on Etsy: how to find gaps and stand out in a crowded market', category: 'Marketing' },
  { topic: 'Adding digital downloads to your Etsy shop for passive income', category: 'Growth' },
  { topic: 'A week in the life: how a six-figure Etsy seller manages their day', category: 'Stories' },
  { topic: 'Instagram Reels strategy for Etsy shop owners in 2024', category: 'Marketing' },
  { topic: 'How to price custom and personalized Etsy orders profitably', category: 'Pricing' },
  { topic: 'The best props, backdrops, and lighting setups for Etsy photography', category: 'Photography' },
  { topic: 'Raising your Etsy prices without losing customers: a step-by-step guide', category: 'Pricing' },
  { topic: 'Reading Etsy analytics: the numbers that actually predict shop growth', category: 'Growth' },
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)
}

function pickTopic(recentTitles: string[]): (typeof TOPIC_SEEDS)[0] {
  const recentLower = recentTitles.map(t => t.toLowerCase())

  // Score each seed by keyword overlap with recent articles — lower = fresher
  const scored = TOPIC_SEEDS.map((seed, index) => {
    const seedWords = seed.topic.toLowerCase().split(/\s+/).filter(w => w.length > 4)
    let overlapScore = 0
    for (const title of recentLower) {
      const titleWords = new Set(title.split(/\s+/))
      overlapScore += seedWords.filter(w => titleWords.has(w)).length
    }
    return { seed, index, overlapScore }
  })

  // Sort by least overlap; use original index as tiebreaker for natural rotation
  scored.sort((a, b) => a.overlapScore - b.overlapScore || a.index - b.index)
  return scored[0].seed
}

export async function GET(request: Request) {
  // Verify Vercel cron secret
  const authHeader = request.headers.get('authorization')
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Instantiate inside the handler so missing env vars surface as 500, not a build-time 404
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

  try {
    // Fetch recent titles to guide duplicate avoidance
    const { data: recentArticles } = await supabase
      .from('articles')
      .select('title')
      .order('published_at', { ascending: false })
      .limit(15)

    const recentTitles = (recentArticles || []).map((a: { title: string }) => a.title)
    const chosen = pickTopic(recentTitles)

    // Generate article with Claude Opus, adaptive thinking, streaming
    const stream = client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 4096,
      thinking: { type: 'adaptive' },
      system: `You are a senior content writer for SellerBuds, a magazine for Etsy sellers.
Write engaging, practical, expert-level articles that help real sellers grow their businesses.
Your writing style is warm, direct, and authoritative — like advice from a highly successful seller friend.
Always use markdown with proper headings, bullet points, and bold text for emphasis.
Include specific, actionable tactics — not vague platitudes.`,
      messages: [
        {
          role: 'user',
          content: `Write a complete magazine-quality article for Etsy sellers on this topic: "${chosen.topic}"

Requirements:
- Length: 800–1200 words of body content (not counting the title)
- Category: ${chosen.category}
- Format: Markdown — use # for the H1 title, ## for section headings
- Include: real examples, specific numbers, actionable steps, and at least one concrete "do this now" tip
- Tone: warm, expert, encouraging — like a successful seller sharing hard-won secrets
- End with a short motivating conclusion paragraph

Recent article titles (avoid too much overlap with these): ${recentTitles.slice(0, 8).join(' | ') || 'none yet'}

Respond with a single valid JSON object — no markdown fences, no extra text:
{
  "title": "Compelling article headline, specific and under 75 characters",
  "excerpt": "1–2 sentence hook that makes sellers want to read on (under 200 chars)",
  "content": "Full article in markdown, 800–1200 words",
  "read_time": <integer minutes to read>,
  "author": "Realistic full author name"
}`,
        },
      ],
    })

    const message = await stream.finalMessage()

    // Extract text block (thinking blocks come first, skip them)
    const textBlock = message.content.find(b => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text block in Claude response')
    }

    // Parse JSON — strip any accidental markdown fences
    const cleaned = textBlock.text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim()
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON object found in Claude response')

    const article = JSON.parse(jsonMatch[0]) as {
      title: string
      excerpt: string
      content: string
      read_time: number
      author: string
    }

    // Build a unique slug: base slug + short timestamp suffix
    const baseSlug = slugify(article.title)
    const suffix = Date.now().toString(36)
    const slug = `${baseSlug}-${suffix}`

    // Persist to Supabase
    const { error: insertError } = await supabase.from('articles').insert({
      title: article.title,
      slug,
      excerpt: article.excerpt,
      content: article.content,
      category: chosen.category,
      author: article.author,
      read_time: Number(article.read_time) || 6,
      featured: false,
      published_at: new Date().toISOString(),
    })

    if (insertError) throw insertError

    return NextResponse.json({
      success: true,
      title: article.title,
      category: chosen.category,
      author: article.author,
      slug,
    })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('[generate-article] Error:', msg)
    return NextResponse.json({ success: false, error: msg }, { status: 500 })
  }
}
