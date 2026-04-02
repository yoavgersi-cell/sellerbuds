'use client'
import { useState } from 'react'

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-2 rounded-full border border-orange-200 bg-white text-sm focus:outline-none focus:border-[#C4612C]"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#C4612C] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#a8501e] transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Join'}
        </button>
      </form>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-orange-100">
      <div className="text-4xl mb-4">&#9993;&#65039;</div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Grow your Etsy shop, one email at a time
      </h2>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">
        Join 12,000+ sellers getting weekly tips on growth, pricing, marketing, and more. Free forever.
      </p>
      {status === 'success' ? (
        <div className="text-[#C4612C] font-medium text-lg">{message}</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full border border-orange-200 bg-[#FFF8F4] focus:outline-none focus:border-[#C4612C] text-sm"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#C4612C] text-white px-7 py-3 rounded-full font-medium hover:bg-[#a8501e] transition-colors disabled:opacity-50 text-sm"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-500 text-sm mt-3">{message}</p>}
      <p className="text-gray-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  )
}
