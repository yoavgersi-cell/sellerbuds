import { getArticles } from '@/lib/articles'
import SearchResults from './SearchResults'

export const metadata = {
  title: 'Search | SellerBuds',
  description: 'Search articles, guides, and tips for Etsy sellers.',
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q?.trim() || ''
  const allArticles = await getArticles()

  const results = q
    ? allArticles.filter(a =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
        a.category.toLowerCase().includes(q.toLowerCase()) ||
        a.author.toLowerCase().includes(q.toLowerCase())
      )
    : []

  return <SearchResults query={q} results={results} totalArticles={allArticles.length} />
}
