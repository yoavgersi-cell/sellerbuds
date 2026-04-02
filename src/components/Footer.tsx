import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 mt-16 py-12 bg-[#FFF8F4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-serif text-xl font-bold text-[#C4612C] mb-3">SellerBuds</div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The magazine for Etsy sellers who want to grow smarter, price better, and build something real.
            </p>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Topics</div>
            <div className="flex flex-col gap-2">
              {['Growth', 'Marketing', 'Pricing', 'Photography', 'Stories'].map(cat => (
                <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="text-gray-500 text-sm hover:text-[#C4612C] transition-colors">
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Stay Updated</div>
            <p className="text-gray-500 text-sm mb-3">Get the best articles delivered to your inbox weekly.</p>
            <Link
              href="/newsletter"
              className="inline-block bg-[#C4612C] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#a8501e] transition-colors"
            >
              Subscribe for free &rarr;
            </Link>
          </div>
        </div>
        <div className="border-t border-orange-100 pt-6 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} SellerBuds. Made with love for Etsy sellers everywhere.
        </div>
      </div>
    </footer>
  )
}
