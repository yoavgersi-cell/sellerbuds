import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export const metadata = {
  title: 'Join the Newsletter | SellerBuds',
  description: 'Weekly tips on growing your Etsy shop — pricing, SEO, photography, marketing, and real seller stories. Free forever.',
}

const weeklyTopics = [
  { icon: '📈', text: 'One actionable growth tactic you can use this week' },
  { icon: '💰', text: 'Pricing and profit insights from real Etsy sellers' },
  { icon: '📸', text: 'Photography and listing tips to boost your click-through rate' },
  { icon: '📣', text: 'What\'s working on Pinterest, TikTok, and Instagram right now' },
  { icon: '✦', text: 'A real seller story — wins, struggles, and lessons' },
]

const recentTopics = [
  'Why your Etsy SEO stopped working (and what to do)',
  'The $0 marketing strategy driving 30% of my traffic',
  'How to respond to a 1-star review without looking defensive',
  'Free shipping vs. separate cost — the data finally settles it',
  'The holiday prep timeline every seller needs to bookmark',
]

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 pt-16 pb-10 text-center">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-4">Free Newsletter</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Grow your Etsy shop,<br />one week at a time.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-2">
          Every week, one practical email for Etsy sellers who want to price better, get found more, and build something real.
        </p>
        <p className="text-sm text-gray-400">Join 12,000+ sellers. Free forever. Unsubscribe anytime.</p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl border border-orange-100 p-8">
          <NewsletterForm compact />
          <p className="text-xs text-gray-400 text-center mt-4">No spam. No fluff. Just one useful email per week.</p>
        </div>
      </div>

      {/* What you get */}
      <div className="border-t border-orange-100 bg-white">
        <div className="max-w-2xl mx-auto px-4 py-14">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">What&apos;s inside each issue</h2>
          <div className="flex flex-col gap-4">
            {weeklyTopics.map((topic, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8F4] border border-orange-100">
                <span className="text-xl flex-shrink-0">{topic.icon}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent topics */}
      <div className="max-w-2xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Recent issues covered</h2>
        <p className="text-gray-500 text-sm mb-8">Topics our subscribers have already gotten in their inbox:</p>
        <div className="flex flex-col gap-3">
          {recentTopics.map((topic, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b border-orange-100 last:border-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4612C] flex-shrink-0" />
              <p className="text-gray-700 text-sm">{topic}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-6">Want to explore before subscribing?</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/start-here" className="px-5 py-2.5 rounded-full border border-[#C4612C] text-[#C4612C] text-sm font-medium hover:bg-[#C4612C] hover:text-white transition-colors">
              Start Here guide
            </Link>
            <Link href="/community" className="px-5 py-2.5 rounded-full border border-orange-100 text-gray-600 text-sm font-medium hover:border-[#C4612C] hover:text-[#C4612C] transition-colors">
              Browse the community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
