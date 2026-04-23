'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Question } from '@/lib/community-data'

const ALL_CATEGORIES = ['All', 'SEO', 'Pricing', 'Photography', 'Marketing', 'General']

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
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function QuestionRow({ q }: { q: Question }) {
  const color = avatarColor(q.author_name)
  const initials = q.author_name.slice(0, 2).toUpperCase()

  return (
    <Link href={`/community/${q.id}`} className="block group">
      <div className="flex items-start gap-4 py-5 border-b border-orange-100 hover:bg-white -mx-4 px-4 transition-colors rounded-xl">
        {/* Avatar */}
        <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
          {initials}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[q.category] || 'bg-gray-100 text-gray-600'}`}>
              {q.category}
            </span>
            <span className="text-xs text-gray-400">{q.author_name}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-400">{timeAgo(q.created_at)}</span>
          </div>
          <h3 className="font-serif font-semibold text-gray-900 text-base leading-snug group-hover:text-[#C4612C] transition-colors mb-1">
            {q.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{q.body}</p>
        </div>

        {/* Reply count */}
        <div className="flex-shrink-0 flex flex-col items-center gap-0.5 pt-1 min-w-[3rem]">
          <span className="text-sm font-bold text-gray-700 group-hover:text-[#C4612C] transition-colors">{q.reply_count}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">{q.reply_count === 1 ? 'reply' : 'replies'}</span>
        </div>
      </div>
    </Link>
  )
}

export default function CommunityList({ questions }: { questions: Question[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? questions
    : questions.filter(q => q.category === activeCategory)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">Community</p>
          <h1 className="font-serif text-3xl font-bold text-gray-900">Ask. Answer. Grow.</h1>
          <p className="text-gray-500 mt-2 text-sm">
            {questions.length} discussions · Real sellers helping real sellers
          </p>
        </div>
        <Link
          href="/community/ask"
          className="flex-shrink-0 bg-[#C4612C] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#a8501e] transition-colors text-sm"
        >
          Ask a Question
        </Link>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {ALL_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? 'bg-[#C4612C] text-white border-[#C4612C]'
                : 'bg-white text-gray-600 border-orange-100 hover:border-[#C4612C] hover:text-[#C4612C]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Question list */}
      <div>
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg mb-2">No questions in this category yet.</p>
            <Link href="/community/ask" className="text-[#C4612C] text-sm font-medium hover:underline">
              Be the first to ask →
            </Link>
          </div>
        ) : (
          filtered.map(q => <QuestionRow key={q.id} q={q} />)
        )}
      </div>
    </div>
  )
}
