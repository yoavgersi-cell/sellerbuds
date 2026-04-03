import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/supabase'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

const categoryColors: Record<string, string> = {
  Growth: 'category-Growth',
  Marketing: 'category-Marketing',
  Pricing: 'category-Pricing',
  Photography: 'category-Photography',
  Stories: 'category-Stories',
  Digital: 'category-Digital',
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${article.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[16/9]">
          {article.cover_image ? (
            <Image
              src={article.cover_image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          ) : (
            <div className="w-full h-full bg-orange-100 flex items-center justify-center">
              <span className="text-[#C4612C] text-4xl">&#10022;</span>
            </div>
          )}
        </div>
        <div>
          <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'} mb-3`}>
            {article.category}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#C4612C] transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="font-medium text-gray-600">{article.author}</span>
            <span>&middot;</span>
            <span>{article.read_time} min read</span>
            <span>&middot;</span>
            <span>{new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${article.slug}`} className="block group">
      <div className="relative overflow-hidden rounded-xl mb-3 aspect-[4/3]">
        {article.cover_image ? (
          <Image
            src={article.cover_image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        ) : (
          <div className="w-full h-full bg-orange-100 flex items-center justify-center">
            <span className="text-[#C4612C] text-2xl">&#10022;</span>
          </div>
        )}
      </div>
      <span className={`category-badge ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'} mb-2`}>
        {article.category}
      </span>
      <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#C4612C] transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span>{article.author}</span>
        <span>&middot;</span>
        <span>{article.read_time} min read</span>
      </div>
    </Link>
  )
}
