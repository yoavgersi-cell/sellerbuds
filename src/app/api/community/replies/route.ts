import { NextResponse } from 'next/server'
import { postReply } from '@/lib/community'

export async function POST(request: Request) {
  const body = await request.json()
  const { question_id, body: text, author_name } = body

  if (!question_id || !text?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const reply = await postReply({
    question_id,
    body: text.trim().slice(0, 2000),
    author_name: author_name?.trim().slice(0, 60) || 'Anonymous Seller',
  })

  if (!reply) return NextResponse.json({ error: 'Failed to save reply' }, { status: 500 })
  return NextResponse.json(reply, { status: 201 })
}
