import { getArticlesByCategory } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import { notFound } from 'next/navigation'

const categories = ['growth', 'marketing', 'pricing', 'photography', 'stories']

const categoryDescriptions: Record<string, string> = {
  growth: 'SEO strategies, listing optimization, and tactics to get more eyes on your shop.',
  marketing: 'Social media, Pinterest, email marketing, and how to build an audience off Etsy.',
  pricing: 'The formulas, frameworks, and mindset shifts to price your work with confidence.',
  photography: 'How to take scroll-stopping product photos with any camera or phone.',
  stories: 'Real stories from real sellers — the wins, the struggles, and the lessons.',
}

export async function generateStaticParams() {
  return categories.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const name = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  return {
    title: `${name} — SellerBuds`,
    description: categoryDescriptions[params.slug] || `${name} articles for Etsy sellers.`,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  if (!categories.includes(params.slug)) notFound()

  const name = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const articles = await getArticlesByCategory(name)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Category header */}
      <div className="mb-10">
        <div className="inline-block mb-3">
          <span className={`category-badge category-${name}`}>{name}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-3">{name}</h1>
        <p className="text-gray-500 text-lg max-w-xl">{categoryDescriptions[params.slug]}</p>
        <div className="w-16 h-1 bg-[#C4612C] mt-5 rounded"></div>
      </div>

      {/* Articles */}
      {articles.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-4">&#10022;</div>
          <p className="text-lg">No articles yet in this category.</p>
          <p className="text-sm mt-2">Check back soon — we&apos;re always writing.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
