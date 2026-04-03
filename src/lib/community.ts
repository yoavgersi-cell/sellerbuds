import { getSupabaseClient } from './supabase'
import { Question, Reply, getMockQuestions, getMockQuestion } from './community-data'

const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your-supabase-anon-key'
  )
}

export async function getQuestions(): Promise<Question[]> {
  if (!isSupabaseConfigured()) return getMockQuestions()
  const { data } = await getSupabaseClient()
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false })
  return data || getMockQuestions()
}

export async function getQuestion(id: string): Promise<{ question: Question | null; replies: Reply[] }> {
  if (!isSupabaseConfigured()) return getMockQuestion(id)
  const [{ data: question }, { data: replies }] = await Promise.all([
    getSupabaseClient().from('questions').select('*').eq('id', id).single(),
    getSupabaseClient().from('replies').select('*').eq('question_id', id).order('created_at', { ascending: true }),
  ])
  return { question: question || null, replies: replies || [] }
}

export async function postQuestion(data: {
  title: string
  body: string
  category: string
  author_name: string
}): Promise<Question | null> {
  if (!isSupabaseConfigured()) {
    return {
      id: Date.now().toString(),
      ...data,
      category: data.category as Question['category'],
      created_at: new Date().toISOString(),
      reply_count: 0,
    }
  }
  const { data: question, error } = await getSupabaseClient()
    .from('questions')
    .insert(data)
    .select()
    .single()
  if (error) return null
  return question
}

export async function postReply(data: {
  question_id: string
  body: string
  author_name: string
}): Promise<Reply | null> {
  if (!isSupabaseConfigured()) {
    return {
      id: Date.now().toString(),
      ...data,
      created_at: new Date().toISOString(),
    }
  }
  const { data: reply, error } = await getSupabaseClient()
    .from('replies')
    .insert(data)
    .select()
    .single()
  if (error) return null
  return reply
}
