'use client'
import { useState, useEffect } from 'react'

interface ArticleForm {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  read_time: number
  cover_image: string
  featured: boolean
}

const defaultForm: ArticleForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'Growth',
  author: '',
  read_time: 5,
  cover_image: '',
  featured: false,
}

const categories = ['Growth', 'Marketing', 'Pricing', 'Photography', 'Stories']

export default function AdminPage() {
  const [articles, setArticles] = useState<Array<ArticleForm & { id: string }>>([])

  const [form, setForm] = useState<ArticleForm>(defaultForm)
  const [editing, setEditing] = useState<string | null>(null)
  const [status, setStatus] = useState('')
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list')

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles() {
    const res = await fetch('/api/admin/articles')
    const data = await res.json()
    setArticles(data)
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Saving...')
    const method = editing ? 'PUT' : 'POST'
    const body = editing ? { ...form, id: editing } : form
    const res = await fetch('/api/admin/articles', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (data.success) {
      setStatus('Saved!')
      setForm(defaultForm)
      setEditing(null)
      setActiveTab('list')
      fetchArticles()
    } else {
      setStatus('Error: ' + data.message)
    }
  }

  function startEdit(article: ArticleForm & { id: string }) {
    setForm({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      author: article.author,
      read_time: article.read_time,
      cover_image: article.cover_image || '',
      featured: article.featured,
    })
    setEditing(article.id)
    setActiveTab('add')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-gray-900">Admin</h1>
          <p className="text-gray-400 text-sm mt-1">Manage SellerBuds articles</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveTab('list'); setEditing(null); setForm(defaultForm) }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'list' ? 'bg-[#C4612C] text-white' : 'bg-orange-100 text-[#C4612C]'}`}
          >
            All Articles ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'add' ? 'bg-[#C4612C] text-white' : 'bg-orange-100 text-[#C4612C]'}`}
          >
            {editing ? 'Edit Article' : '+ New Article'}
          </button>
        </div>
      </div>

      {activeTab === 'list' && (
        <div className="space-y-3">
          {articles.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>No articles yet. Add your first one!</p>
            </div>
          )}
          {articles.map(article => (
            <div key={article.id} className="flex items-center justify-between bg-white rounded-xl p-4 border border-orange-100">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`category-badge category-${article.category} text-xs`}>{article.category}</span>
                  {article.featured && <span className="bg-[#C4612C] text-white text-xs px-2 py-0.5 rounded-full">Featured</span>}
                </div>
                <div className="font-semibold text-gray-800 text-sm truncate">{article.title}</div>
                <div className="text-gray-400 text-xs mt-0.5">{article.author} &middot; {article.read_time} min read</div>
              </div>
              <div className="flex gap-2 ml-4">
                <a href={`/article/${article.slug}`} target="_blank" className="text-xs px-3 py-1.5 rounded-lg bg-orange-50 text-[#C4612C] hover:bg-orange-100 transition-colors">View</a>
                <button onClick={() => startEdit(article)} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">Edit</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'add' && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-orange-100 space-y-5">
          <h2 className="font-serif text-xl font-bold text-gray-900">{editing ? 'Edit Article' : 'New Article'}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: autoSlug(e.target.value) }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
              <input
                type="text"
                value={form.author}
                onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm bg-white"
              >
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (minutes)</label>
              <input
                type="number"
                value={form.read_time}
                onChange={e => setForm(f => ({ ...f, read_time: parseInt(e.target.value) }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm"
                min={1}
                max={60}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt *</label>
              <textarea
                value={form.excerpt}
                onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                rows={2}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm resize-none"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
              <input
                type="url"
                value={form.cover_image}
                onChange={e => setForm(f => ({ ...f, cover_image: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm"
                placeholder="https://..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Content (Markdown) *</label>
              <textarea
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                rows={16}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C4612C] text-sm font-mono resize-y"
                required
                placeholder="# Article Title&#10;&#10;Write your article in markdown..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={form.featured}
                onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
                className="w-4 h-4 accent-[#C4612C]"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured article (shown hero on homepage)</label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="bg-[#C4612C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#a8501e] transition-colors text-sm"
            >
              {editing ? 'Save Changes' : 'Publish Article'}
            </button>
            {editing && (
              <button
                type="button"
                onClick={() => { setEditing(null); setForm(defaultForm); setActiveTab('list') }}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                Cancel
              </button>
            )}
            {status && <span className={`text-sm ${status.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>{status}</span>}
          </div>
        </form>
      )}
    </div>
  )
}
