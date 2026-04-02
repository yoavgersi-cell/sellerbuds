import { supabase, Article } from './supabase'
import { mockArticles } from './mock-data'

const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your-supabase-anon-key'
  )
}

export async function getArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) return mockArticles
  const { data } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false })
  return data || mockArticles
}

export async function getFeaturedArticle(): Promise<Article | null> {
  if (!isSupabaseConfigured()) return mockArticles.find(a => a.featured) || mockArticles[0]
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('featured', true)
    .limit(1)
    .single()
  return data || mockArticles[0]
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!isSupabaseConfigured()) return mockArticles.find(a => a.slug === slug) || null
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  if (!isSupabaseConfigured()) return mockArticles.filter(a => a.category.toLowerCase() === category.toLowerCase())
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false })
  return data || []
}

export async function getMostReadArticles(limit = 5): Promise<Article[]> {
  if (!isSupabaseConfigured()) return mockArticles.slice(0, limit)
  const { data } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(limit)
  return data || mockArticles.slice(0, limit)
}

export async function subscribeEmail(email: string): Promise<{ success: boolean; message: string }> {
  if (!isSupabaseConfigured()) {
    return { success: true, message: "You're subscribed! (demo mode)" }
  }
  const { error } = await supabase.from('subscribers').insert({ email })
  if (error) {
    if (error.code === '23505') return { success: false, message: 'Already subscribed!' }
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
  return { success: true, message: "You're in! Welcome to SellerBuds." }
}
