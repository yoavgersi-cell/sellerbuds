import { getQuestions } from '@/lib/community'
import CommunityList from './CommunityList'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Seller Community | SellerBuds',
  description: 'Ask questions and get answers from real Etsy sellers.',
}

export default async function CommunityPage() {
  const questions = await getQuestions()
  return <CommunityList questions={questions} />
}
