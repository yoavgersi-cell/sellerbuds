import { getArticles, getFeaturedArticle, getMostReadArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export const revalidate = 60

export default async function HomePage() {
  const [featured, allArticles, mostRead] = await Promise.all([
    getFeaturedArticle(),
    getArticles(),
    getMostReadArticles(5),
  ])

  const gridArticles = allArticles.filter(a => !a.featured).slice(0, 8)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header tagline */}
      <div className="text-center mb-10">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">The Magazine for Etsy Sellers</p>
        <div className="w-16 h-0.5 bg-[#C4612C] mx-auto opacity-30"></div>
      </div>

      {/* Main layout: featured + most read */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        {/* Featured article */}
        <div className="lg:col-span-2">
          {featured && <ArticleCard article={featured} featured />}
        </div>

        {/* Most Read sidebar */}
        <div>
          <h2 className="font-serif text-xl font-bold text-gray-800 mb-5 pb-3 border-b border-orange-100">
            Most Read
          </h2>
          <div className="flex flex-col gap-5">
            {mostRead.map((article, i) => (
              <div key={article.id} className="flex gap-3 group">
                <span className="font-serif text-3xl font-bold text-orange-100 leading-none mt-1 min-w-[2rem]">
                  {i + 1}
                </span>
                <div>
                  <Link href={`/article/${article.slug}`} className="font-serif font-semibold text-gray-800 text-sm leading-snug group-hover:text-[#C4612C] transition-colors block mb-1">
                    {article.title}
                  </Link>
                  <span className="text-xs text-gray-400">{article.read_time} min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-serif text-2xl font-bold text-gray-800">Latest Articles</h2>
        <div className="flex-1 h-px bg-orange-100"></div>
      </div>

      {/* 2x2 article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {gridArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Newsletter signup */}
      <NewsletterForm />
    </div>
  )
}
