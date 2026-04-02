import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { mockArticles } from '@/lib/mock-data'

const isSupabaseConfigured = () =>
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url'

export async function GET() {
  if (!isSupabaseConfigured()) return NextResponse.json(mockArticles)
  const { data } = await supabase.from('articles').select('*').order('published_at', { ascending: false })
  return NextResponse.json(data || [])
}

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json({ success: true, message: 'Demo mode — connect Supabase to persist.' })
  try {
    const body = await req.json()
    const { error } = await supabase.from('articles').insert({
      ...body,
      published_at: new Date().toISOString(),
    })
    if (error) return NextResponse.json({ success: false, message: error.message }, { status: 400 })
    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ success: false, message }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json({ success: true, message: 'Demo mode.' })
  try {
    const { id, ...body } = await req.json()
    const { error } = await supabase.from('articles').update(body).eq('id', id)
    if (error) return NextResponse.json({ success: false, message: error.message }, { status: 400 })
    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ success: false, message }, { status: 500 })
  }
}
