import { NextResponse } from 'next/server'
import { postQuestion } from '@/lib/community'

export async function POST(request: Request) {
  const body = await request.json()
  const { title, body: text, category, author_name } = body

  if (!title?.trim() || !text?.trim() || !category) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const validCategories = ['SEO', 'Pricing', 'Photography', 'Marketing', 'General']
  if (!validCategories.includes(category)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 })
  }

  const question = await postQuestion({
    title: title.trim().slice(0, 200),
    body: text.trim().slice(0, 3000),
    category,
    author_name: author_name?.trim().slice(0, 60) || 'Anonymous Seller',
  })

  if (!question) return NextResponse.json({ error: 'Failed to save question' }, { status: 500 })
  return NextResponse.json(question, { status: 201 })
}
