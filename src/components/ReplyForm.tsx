'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ReplyForm({ questionId }: { questionId: string }) {
  const router = useRouter()
  const [form, setForm] = useState({ body: '', author_name: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.body.trim()) {
      setError('Please write a reply before submitting.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/community/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question_id: questionId, ...form }),
      })
      if (!res.ok) throw new Error('Failed')
      setSuccess(true)
      setForm({ body: '', author_name: '' })
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="bg-[#FFF8F4] border border-orange-100 rounded-2xl p-6 text-center">
        <p className="text-[#C4612C] font-semibold mb-1">Reply posted!</p>
        <p className="text-gray-500 text-sm">Thanks for helping a fellow seller.</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 text-sm text-gray-400 hover:text-[#C4612C] transition-colors"
        >
          Write another reply
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your reply</label>
        <textarea
          placeholder="Share what's worked for you, or ask a follow-up question..."
          value={form.body}
          onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
          rows={5}
          maxLength={2000}
          className="w-full border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C4612C] bg-white placeholder-gray-300 resize-none"
        />
        <p className="text-xs text-gray-300 mt-1 text-right">{form.body.length}/2000</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name (optional)</label>
        <input
          type="text"
          placeholder="Anonymous Seller"
          value={form.author_name}
          onChange={e => setForm(f => ({ ...f, author_name: e.target.value }))}
          maxLength={60}
          className="w-full border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C4612C] bg-white placeholder-gray-300"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="self-start bg-[#C4612C] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#a8501e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {submitting ? 'Posting...' : 'Post Reply'}
      </button>
    </form>
  )
}
