'use client'
import Link from 'next/link'
import { useState } from 'react'

const categories = ['Growth', 'Marketing', 'Pricing', 'Photography', 'Stories']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-orange-100 bg-[#FFF8F4] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-[#C4612C] tracking-tight">
            SellerBuds
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/newsletter"
              className="bg-[#C4612C] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#a8501e] transition-colors"
            >
              Subscribe
            </Link>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700"></div>
          </button>
        </div>

        {/* Category nav */}
        <nav className="hidden md:flex gap-6 pb-3 text-sm font-medium text-gray-600">
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="hover:text-[#C4612C] transition-colors"
            >
              {cat}
            </Link>
          ))}
          <Link href="/admin" className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
            Admin
          </Link>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-orange-100 mt-1 pt-4">
            <div className="flex flex-col gap-3">
              {categories.map(cat => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-[#C4612C]"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat}
                </Link>
              ))}
              <Link
                href="/newsletter"
                className="bg-[#C4612C] text-white px-4 py-2 rounded-full text-sm font-medium text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
