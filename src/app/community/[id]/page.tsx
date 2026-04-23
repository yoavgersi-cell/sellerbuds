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

const avatarColors = [
  'bg-[#C4612C]',
  'bg-emerald-600',
  'bg-blue-600',
  'bg-purple-600',
  'bg-amber-600',
  'bg-rose-500',
  'bg-teal-600',
  'bg-indigo-600',
]

function avatarColor(name: string) {
  const code = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return avatarColors[code % avatarColors.length]
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

function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }) {
  const color = avatarColor(name)
  const initials = name.slice(0, 2).toUpperCase()
  const sizeClass = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'
  return (
    <div className={`${sizeClass} rounded-full ${color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const { question, replies } = await getQuestion(params.id)
  if (!question) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/community" className="text-sm text-gray-400 hover:text-[#C4612C] transition-colors mb-8 inline-flex items-center gap-1">
        ← Back to Community
      </Link>

      {/* Question */}
      <div className="mt-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[question.category] || 'bg-gray-100 text-gray-600'}`}>
            {question.category}
          </span>
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
          {question.title}
        </h1>

        <div className="flex items-start gap-3 p-5 bg-[#FFF8F4] rounded-2xl border border-orange-100">
          <Avatar name={question.author_name} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
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
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-serif text-lg font-bold text-gray-800">
              {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
            </h2>
            <div className="flex-1 h-px bg-orange-100" />
          </div>

          <div className="flex flex-col gap-4">
            {replies.map((reply, i) => (
              <div key={reply.id} className="flex items-start gap-3">
                <Avatar name={reply.author_name} size="sm" />
                <div className="flex-1 min-w-0 bg-white border border-orange-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-800">{reply.author_name}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-xs text-gray-400">{timeAgo(reply.created_at)}</span>
                    {i === 0 && (
                      <span className="ml-auto text-[10px] font-semibold text-[#C4612C] bg-orange-50 px-2 py-0.5 rounded-full">
                        Top answer
                      </span>
                    )}
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
