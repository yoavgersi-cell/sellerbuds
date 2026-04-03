import Link from 'next/link'
import { getQuestions } from '@/lib/community'
import type { Question } from '@/lib/community-data'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Seller Community | SellerBuds',
  description: 'Ask questions and get answers from real Etsy sellers.',
}

const categoryColors: Record<string, string> = {
  SEO: 'bg-amber-100 text-amber-700',
  Pricing: 'bg-emerald-100 text-emerald-700',
  Photography: 'bg-blue-100 text-blue-700',
  Marketing: 'bg-purple-100 text-purple-700',
  General: 'bg-gray-100 text-gray-600',
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 30) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function QuestionRow({ q }: { q: Question }) {
  return (
    <Link href={`/community/${q.id}`} className="block group">
      <div className="flex items-start gap-4 py-5 border-b border-orange-100 hover:bg-[#FFF8F4] -mx-4 px-4 transition-colors rounded-lg">
        {/* Reply count bubble */}
        <div className="flex-shrink-0 flex flex-col items-center gap-0.5 min-w-[2.5rem] pt-0.5">
          <span className="font-serif text-2xl font-bold text-orange-100 group-hover:text-orange-200 transition-colors leading-none">
            {q.reply_count}
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">
            {q.reply_count === 1 ? 'reply' : 'replies'}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-gray-900 text-base leading-snug group-hover:text-[#C4612C] transition-colors mb-1.5">
            {q.title}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[q.category] || 'bg-gray-100 text-gray-600'}`}>
              {q.category}
            </span>
            <span className="text-xs text-gray-400">{q.author_name}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-400">{timeAgo(q.created_at)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function CommunityPage() {
  const questions = await getQuestions()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">Seller Community</p>
          <h1 className="font-serif text-3xl font-bold text-gray-900">Ask. Answer. Grow.</h1>
          <p className="text-gray-500 mt-2 text-sm">Real questions from real Etsy sellers. No login required.</p>
        </div>
        <Link
          href="/community/ask"
          className="flex-shrink-0 bg-[#C4612C] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#a8501e] transition-colors text-sm"
        >
          Ask a Question
        </Link>
      </div>

      {/* Question list */}
      <div>
        {questions.length === 0 ? (
          <p className="text-gray-400 text-center py-16">No questions yet — be the first to ask!</p>
        ) : (
          questions.map(q => <QuestionRow key={q.id} q={q} />)
        )}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/community/ask"
          className="inline-block bg-[#C4612C] text-white font-medium px-6 py-3 rounded-full hover:bg-[#a8501e] transition-colors"
        >
          Ask a Question
        </Link>
      </div>
    </div>
  )
}
