import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="font-serif text-8xl font-bold text-orange-100 mb-4">404</p>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">
        This page has left the building.
      </h1>
      <p className="text-gray-500 mb-10 max-w-md mx-auto">
        The article or page you&apos;re looking for doesn&apos;t exist — it may have moved or been taken down.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
        <Link
          href="/"
          className="bg-[#C4612C] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#a8501e] transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/start-here"
          className="border border-[#C4612C] text-[#C4612C] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#C4612C] hover:text-white transition-colors"
        >
          Start Here guide
        </Link>
      </div>

      <div className="border-t border-orange-100 pt-10">
        <p className="text-sm text-gray-400 mb-5">Or browse what sellers are reading right now:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { href: '/article/how-to-rank-higher-on-etsy-search', label: 'Etsy SEO in 2026' },
            { href: '/article/pricing-your-handmade-products', label: 'Pricing formula' },
            { href: '/article/product-photography-with-iphone', label: 'iPhone photography' },
            { href: '/article/from-side-hustle-to-full-time', label: 'From side hustle to $8K/mo' },
            { href: '/community', label: 'Community Q&A' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full border border-orange-100 text-sm text-gray-600 hover:border-[#C4612C] hover:text-[#C4612C] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
