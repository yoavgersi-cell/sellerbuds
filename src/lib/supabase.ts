import { createClient, SupabaseClient } from '@supabase/supabase-js'

export type Article = {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  read_time: number
  published_at: string
  featured: boolean
  cover_image?: string
  slug: string
}

export type Subscriber = {
  id: string
  email: string
  created_at: string
}

let _supabase: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (_supabase) return _supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  _supabase = createClient(supabaseUrl, supabaseAnonKey)
  return _supabase
}

// For backwards compatibility, export a proxy that lazily initializes
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return getSupabaseClient()[prop as keyof SupabaseClient]
  }
})
