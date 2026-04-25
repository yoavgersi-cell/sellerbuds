'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/supabase'

const categoryColors: Record<string, string> = {
  Growth: 'category-Growth',
  Marketing: 'category-Marketing',
  Pricing: 'category-Pricing',
  Photography: 'category-Photography',
  Stories: 'category-Stories',
  Digital: 'category-Digital',
}

export default function SearchResults({
  query,
  results,
  totalArticles,
}: {
  query: string
  results: Article[]
  totalArticles: number
}) {
  const router = useRouter()
  const [input, setInput] = useState(query)

  useEffect(() => { setInput(query) }, [query])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input.trim()) router.push(`/search?q=${encodeURIComponent(input.trim())}`)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Search bar */}
      <div className="mb-10">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-3">Search</p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Search ${totalArticles} articles…`}
            autoFocus
            className="flex-1 px-5 py-3 rounded-full border border-orange-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C4612C] text-sm"
          />
          <button
            type="submit"
            className="bg-[#C4612C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#a8501e] transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results */}
      {!query && (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-10 h-10 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round" strokeWidth="2"/>
          </svg>
          <p className="text-lg font-medium text-gray-500">What are you looking for?</p>
          <p className="text-sm mt-1">Try &ldquo;pricing&rdquo;, &ldquo;photography&rdquo;, &ldquo;TikTok&rdquo;, or &ldquo;first sale&rdquo;</p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg font-medium text-gray-700 mb-2">No results for &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-gray-400 mb-6">Try a different keyword or browse by category</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {['Growth', 'Marketing', 'Pricing', 'Photography', 'Stories'].map(cat => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="px-4 py-2 rounded-full border border-orange-100 text-sm text-gray-600 hover:border-[#C4612C] hover:text-[#C4612C] transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      {query && results.length > 0 && (
        <div>
          <p className="text-sm text-gray-400 mb-6">
            {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
          <div className="flex flex-col gap-5">
            {results.map(article => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group flex gap-4 p-4 rounded-2xl border border-orange-100 hover:border-orange-200 hover:bg-white transition-colors">
                {article.cover_image && (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={article.cover_image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'} mb-2`}>
                    {article.category}
                  </span>
                  <h3 className="font-serif font-bold text-gray-900 text-base leading-snug group-hover:text-[#C4612C] transition-colors mb-1 mt-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-1.5">{article.author} · {article.read_time} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
