'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const categories = ['SEO', 'Pricing', 'Photography', 'Marketing', 'General']

export default function AskPage() {
  const router = useRouter()
  const [form, setForm] = useState({ title: '', body: '', category: '', author_name: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.body.trim() || !form.category) {
      setError('Please fill in the title, question, and category.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/community/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      const question = await res.json()
      router.push(`/community/${question.id}`)
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/community" className="text-sm text-gray-400 hover:text-[#C4612C] transition-colors mb-8 inline-block">
        ← Back to Community
      </Link>

      <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">Seller Community</p>
      <h1 className="font-serif text-3xl font-bold text-gray-900 mb-8">Ask a Question</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Question title <span className="text-[#C4612C]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. How do I know if my keywords are working?"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            maxLength={200}
            className="w-full border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C4612C] bg-white placeholder-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your question <span className="text-[#C4612C]">*</span>
          </label>
          <textarea
            placeholder="Describe your situation in detail so other sellers can give you specific advice..."
            value={form.body}
            onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
            rows={6}
            maxLength={3000}
            className="w-full border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C4612C] bg-white placeholder-gray-300 resize-none"
          />
          <p className="text-xs text-gray-300 mt-1 text-right">{form.body.length}/3000</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Category <span className="text-[#C4612C]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setForm(f => ({ ...f, category: cat }))}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  form.category === cat
                    ? 'bg-[#C4612C] text-white border-[#C4612C]'
                    : 'bg-white text-gray-600 border-orange-100 hover:border-[#C4612C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
          className="bg-[#C4612C] text-white font-medium px-6 py-3 rounded-full hover:bg-[#a8501e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Posting...' : 'Post Question'}
        </button>
      </form>
    </div>
  )
}
