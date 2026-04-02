import { NextResponse } from 'next/server'
import { subscribeEmail } from '@/lib/articles'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email.' }, { status: 400 })
    }
    const result = await subscribeEmail(email)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ success: false, message: 'Server error.' }, { status: 500 })
  }
}
