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
  const filteredMostRead = mostRead.filter(a => a.id !== featured?.id)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header tagline */}
      <div className="text-center mb-8">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">The Magazine for Etsy Sellers</p>
        <div className="w-16 h-0.5 bg-[#C4612C] mx-auto opacity-30"></div>
      </div>

      {/* New here banner */}
      <div className="mb-10 rounded-2xl border border-orange-200 bg-[#FFF8F4] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="font-serif font-bold text-gray-900 text-base">New to Etsy selling?</span>
          <span className="text-gray-500 text-sm ml-2">We put together a step-by-step guide for exactly where you are.</span>
        </div>
        <Link
          href="/start-here"
          className="flex-shrink-0 text-sm font-semibold text-white bg-[#C4612C] hover:bg-[#a8501e] transition-colors px-5 py-2 rounded-full"
        >
          Start here →
        </Link>
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
            {filteredMostRead.map((article, i) => (
              <div key={article.id} className="flex gap-3 group">
                <span className="font-serif text-3xl font-bold text-orange-200 leading-none mt-1 min-w-[2rem]">
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

      {/* Reading Paths */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-serif text-2xl font-bold text-gray-800">Reading Paths</h2>
          <div className="flex-1 h-px bg-orange-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#FFF8F4] border border-orange-100 rounded-2xl p-6">
            <div className="text-2xl mb-3">🌱</div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-1.5">Your First Sale</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">The exact steps to go from zero to your first order on Etsy.</p>
            <div className="flex flex-col gap-2">
              <Link href="/article/how-to-rank-higher-on-etsy-search" className="text-[#C4612C] text-sm hover:underline">→ Etsy SEO in 2026</Link>
              <Link href="/article/pricing-your-handmade-products" className="text-[#C4612C] text-sm hover:underline">→ Price for profit, not just to compete</Link>
              <Link href="/article/product-photography-with-iphone" className="text-[#C4612C] text-sm hover:underline">→ Great photos on a budget</Link>
            </div>
          </div>
          <div className="bg-[#FFF8F4] border border-orange-100 rounded-2xl p-6">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-1.5">Grow Your Traffic</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">Get more eyes on your shop — without paying for every click.</p>
            <div className="flex flex-col gap-2">
              <Link href="/article/pinterest-marketing-for-etsy" className="text-[#C4612C] text-sm hover:underline">→ How Pinterest drives 60% of my traffic</Link>
              <Link href="/article/tiktok-for-etsy-sellers" className="text-[#C4612C] text-sm hover:underline">→ Winning on TikTok as an Etsy seller</Link>
              <Link href="/article/build-a-brand-not-just-a-shop" className="text-[#C4612C] text-sm hover:underline">→ Build a brand, not just a shop</Link>
            </div>
          </div>
          <div className="bg-[#FFF8F4] border border-orange-100 rounded-2xl p-6">
            <div className="text-2xl mb-3">💰</div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-1.5">Earn More Per Sale</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">Stop leaving money on the table. Price, position, and profit better.</p>
            <div className="flex flex-col gap-2">
              <Link href="/article/pricing-your-handmade-products" className="text-[#C4612C] text-sm hover:underline">→ The real pricing formula</Link>
              <Link href="/article/etsy-offsite-ads-survival-guide" className="text-[#C4612C] text-sm hover:underline">→ Turn the 15% fee into profit</Link>
              <Link href="/article/digital-downloads-passive-income-etsy" className="text-[#C4612C] text-sm hover:underline">→ Passive income with digital downloads</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tools We Love */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-serif text-2xl font-bold text-gray-800">Tools We Love</h2>
          <div className="flex-1 h-px bg-orange-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Taggy AI */}
          <div className="border border-orange-100 rounded-2xl p-6 bg-[#FFF8F4] flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">Taggy AI</h3>
              <span className="text-xs font-semibold text-[#C4612C] bg-orange-100 px-2.5 py-1 rounded-full">Free</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
              Generate perfect Etsy titles, descriptions, tags, and file names in seconds. Just fill in a few details about your product.
            </p>
            <a
              href="https://taggy-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4612C] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#a8501e] transition-colors text-center"
            >
              Try Taggy Free →
            </a>
          </div>

          {/* eRank */}
          <div className="border border-orange-100 rounded-2xl p-6 bg-white flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">eRank</h3>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Free Tier</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
              The go-to keyword research tool for Etsy sellers. Find what buyers are actually searching, audit your listings, and track your rankings over time.
            </p>
            <a
              href="https://erank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#C4612C] hover:text-[#C4612C] transition-colors text-center"
            >
              Try eRank Free →
            </a>
          </div>

          {/* Canva */}
          <div className="border border-orange-100 rounded-2xl p-6 bg-white flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">Canva</h3>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Free Tier</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
              Design your shop banner, product mockups, social posts, and packaging inserts — no design skills needed. The free plan covers everything most Etsy sellers need.
            </p>
            <a
              href="https://canva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#C4612C] hover:text-[#C4612C] transition-colors text-center"
            >
              Try Canva Free →
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <NewsletterForm />
    </div>
  )
}
