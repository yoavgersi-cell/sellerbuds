import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getQuestion } from '@/lib/community'
import ReplyForm from '@/components/ReplyForm'

export const dynamic = 'force-dynamic'

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
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="w-8 h-8 rounded-full bg-[#C4612C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
      {initials}
    </div>
  )
}

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const { question, replies } = await getQuestion(params.id)
  if (!question) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/community" className="text-sm text-gray-400 hover:text-[#C4612C] transition-colors mb-8 inline-block">
        ← Community
      </Link>

      {/* Question */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[question.category] || 'bg-gray-100 text-gray-600'}`}>
            {question.category}
          </span>
        </div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5">
          {question.title}
        </h1>
        <div className="flex items-start gap-3">
          <Avatar name={question.author_name} />
          <div className="bg-[#FFF8F4] border border-orange-100 rounded-2xl rounded-tl-sm p-5 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-gray-800">{question.author_name}</span>
              <span className="text-gray-300 text-xs">·</span>
              <span className="text-xs text-gray-400">{timeAgo(question.created_at)}</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{question.body}</p>
          </div>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="mb-10">
          <h2 className="font-serif text-lg font-bold text-gray-800 mb-5">
            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
          </h2>
          <div className="flex flex-col gap-4">
            {replies.map(reply => (
              <div key={reply.id} className="flex items-start gap-3">
                <Avatar name={reply.author_name} />
                <div className="bg-white border border-orange-100 rounded-2xl rounded-tl-sm p-5 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-gray-800">{reply.author_name}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-xs text-gray-400">{timeAgo(reply.created_at)}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{reply.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reply form */}
      <div className="border-t border-orange-100 pt-8">
        <h2 className="font-serif text-lg font-bold text-gray-800 mb-5">Leave a Reply</h2>
        <ReplyForm questionId={question.id} />
      </div>
    </div>
  )
}
