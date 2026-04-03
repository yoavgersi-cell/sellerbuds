import { getArticleBySlug, getArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — SellerBuds`,
    description: article.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  Growth: 'category-Growth',
  Marketing: 'category-Marketing',
  Pricing: 'category-Pricing',
  Photography: 'category-Photography',
  Stories: 'category-Stories',
}

// Very simple markdown-to-HTML converter (handles # headers, ** bold, \n\n paragraphs)
function renderContent(content: string): string {
  return content
    .split('\n\n')
    .map(block => {
      if (block.startsWith('# ')) return `<h1>${block.slice(2)}</h1>`
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`
      if (block.startsWith('### ')) return `<h3>${block.slice(4)}</h3>`
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(l => l.replace(/^- /, '')).map(l => `<li>${processBold(l)}</li>`).join('')
        return `<ul>${items}</ul>`
      }
      if (/^\d+\./.test(block)) {
        const items = block.split('\n').map(l => l.replace(/^\d+\. /, '')).map(l => `<li>${processBold(l)}</li>`).join('')
        return `<ol>${items}</ol>`
      }
      return `<p>${processBold(block)}</p>`
    })
    .join('\n')
}

function processBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

function splitAfterNthParagraph(html: string, n: number): [string, string] {
  let count = 0
  let pos = 0
  while (count < n) {
    const idx = html.indexOf('</p>', pos)
    if (idx === -1) break
    pos = idx + 4
    count++
  }
  return [html.slice(0, pos), html.slice(pos)]
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const contentHtml = renderContent(article.content)
  const [beforeCta, afterCta] = splitAfterNthParagraph(contentHtml, 3)

  return (
    <div>
      {/* Article header */}
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-6">
        <div className="mb-4">
          <Link href={`/category/${article.category.toLowerCase()}`}>
            <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
              {article.category}
            </span>
          </Link>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          {article.title}
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-6">{article.excerpt}</p>
        <div className="flex items-center gap-4 pb-6 border-b border-orange-100">
          <div className="w-10 h-10 rounded-full bg-[#C4612C] flex items-center justify-center text-white font-bold text-sm">
            {article.author.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <div className="font-medium text-gray-800 text-sm">{article.author}</div>
            <div className="text-gray-400 text-xs">
              {new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} &middot; {article.read_time} min read
            </div>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {article.cover_image && (
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-li:text-gray-700 prose-ol:my-4 prose-ul:my-4"
          dangerouslySetInnerHTML={{ __html: beforeCta }}
        />

        {/* Taggy AI inline CTA */}
        <div className="not-prose my-8 rounded-xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap" style={{ backgroundColor: '#FFF0E8' }}>
          <p className="text-sm text-gray-700 leading-snug">
            <span className="font-semibold text-gray-900">Writing your listings manually?</span>{' '}
            Taggy AI generates your titles, tags &amp; descriptions in seconds — free.
          </p>
          <a
            href="https://taggy-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#C4612C] hover:underline whitespace-nowrap"
          >
            Try it free →
          </a>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-li:text-gray-700 prose-ol:my-4 prose-ul:my-4"
          dangerouslySetInnerHTML={{ __html: afterCta }}
        />

        {/* Article footer */}
        <div className="mt-12 pt-8 border-t border-orange-100">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href={`/category/${article.category.toLowerCase()}`}
              className="text-[#C4612C] text-sm font-medium hover:underline"
            >
              &larr; More {article.category} articles
            </Link>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </div>
  )
}
