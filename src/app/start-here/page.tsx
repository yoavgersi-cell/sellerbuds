import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'Start Here | SellerBuds',
  description: 'Whether you\'re opening your first Etsy shop or want to grow smarter — this is your roadmap.',
}

const beginnerSteps = [
  {
    number: '01',
    title: 'Decide what to sell',
    desc: 'Most new sellers overthink this. Pick one specific niche and own it — a focused shop always outperforms a scattered one.',
    link: { href: '/article/digital-downloads-passive-income-etsy', label: 'How digital downloads work on Etsy' },
  },
  {
    number: '02',
    title: 'Write listings that get found',
    desc: 'Etsy is a search engine first. Your title, tags, and keywords determine whether buyers ever see you.',
    link: { href: '/article/how-to-rank-higher-on-etsy-search', label: 'How to rank higher on Etsy search' },
  },
  {
    number: '03',
    title: 'Price for profit — not just to compete',
    desc: 'The #1 mistake new sellers make is pricing too low. There\'s a formula. Use it.',
    link: { href: '/article/pricing-your-handmade-products', label: 'The real formula for pricing your products' },
  },
  {
    number: '04',
    title: 'Get your photos right',
    desc: 'Your photo is the only thing a buyer sees before they click. It needs to stop the scroll. No professional camera needed.',
    link: { href: '/article/product-photography-with-iphone', label: 'Stunning product photos with just your iPhone' },
  },
  {
    number: '05',
    title: 'Ship without losing money',
    desc: 'Shipping costs sink more shops than anything else. Build your rates correctly from day one.',
    link: { href: '/article/shipping-strategies-that-protect-profit', label: 'Shipping strategies that protect your profits' },
  },
  {
    number: '06',
    title: 'Make your first sale',
    desc: 'Organic traffic takes time. Here\'s what to do in the first 30 days to get the algorithm working for you.',
    link: { href: '/community/6', label: 'How long did it take you to get your first sale?' },
  },
]

const growthPaths = [
  {
    icon: '📈',
    title: 'Get more traffic',
    desc: 'SEO, Pinterest, and TikTok — the three channels that actually move the needle for Etsy shops in 2026.',
    links: [
      { href: '/article/how-to-rank-higher-on-etsy-search', label: 'Etsy SEO in 2026' },
      { href: '/article/pinterest-marketing-for-etsy', label: 'How Pinterest drives 60% of my traffic' },
      { href: '/article/tiktok-for-etsy-sellers', label: 'How Etsy sellers are winning on TikTok' },
    ],
  },
  {
    icon: '💰',
    title: 'Price smarter',
    desc: 'Stop guessing your prices. Understand your margins, offsite ads, and when to charge more.',
    links: [
      { href: '/article/pricing-your-handmade-products', label: 'The real pricing formula' },
      { href: '/article/etsy-offsite-ads-survival-guide', label: 'Stop dreading the 15% offsite ads fee' },
      { href: '/article/pricing-digital-downloads-etsy', label: 'How to price digital downloads' },
    ],
  },
  {
    icon: '✦',
    title: 'Build a real brand',
    desc: 'Shops that look like brands convert better, charge more, and keep buyers coming back.',
    links: [
      { href: '/article/build-a-brand-not-just-a-shop', label: 'Build a brand, not just a shop' },
      { href: '/article/etsy-star-seller-what-it-actually-does', label: 'What Star Seller actually does for your shop' },
      { href: '/article/from-side-hustle-to-full-time', label: 'From side hustle to $8K/month' },
    ],
  },
  {
    icon: '🤖',
    title: 'Work smarter, not harder',
    desc: 'The sellers gaining ground in 2026 are using AI to do in minutes what used to take hours.',
    links: [
      { href: '/article/ai-tools-for-etsy-sellers-2026', label: 'How smart sellers are using AI' },
      { href: '/article/digital-downloads-passive-income-etsy', label: 'Making money while you sleep with digital downloads' },
      { href: '/article/etsy-holiday-season-prep-guide', label: 'The 90-day holiday prep plan' },
    ],
  },
]

export default function StartHerePage() {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-10 text-center">
        <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-4">Your Etsy Roadmap</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
          Start here.
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
          Whether you're setting up your first shop or pushing past your first 100 sales — this is your guide.
        </p>
      </div>

      {/* Two path cards */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="#beginner"
            className="group block bg-[#FFF8F4] border-2 border-orange-200 hover:border-[#C4612C] rounded-2xl p-7 transition-all"
          >
            <div className="text-3xl mb-3">🌱</div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C4612C] transition-colors">
              I want to open my first shop
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Start from zero. A clear step-by-step path to your first listing and your first sale.
            </p>
            <span className="inline-block mt-4 text-[#C4612C] text-sm font-semibold">
              The beginner roadmap →
            </span>
          </a>

          <a
            href="#growth"
            className="group block bg-[#FFF8F4] border-2 border-orange-200 hover:border-[#C4612C] rounded-2xl p-7 transition-all"
          >
            <div className="text-3xl mb-3">📈</div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C4612C] transition-colors">
              I have a shop and want more sales
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              You're past the basics. Let's get strategic — traffic, pricing, branding, and more.
            </p>
            <span className="inline-block mt-4 text-[#C4612C] text-sm font-semibold">
              The growth playbook →
            </span>
          </a>
        </div>
      </div>

      {/* Beginner Roadmap */}
      <div id="beginner" className="border-t border-orange-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">For new sellers</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">The Beginner's Roadmap</h2>
            <p className="text-gray-500 mt-3 max-w-lg">Six steps, in order. Don't skip ahead — each one builds on the last.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beginnerSteps.map(step => (
              <div key={step.number} className="flex gap-4 p-6 rounded-2xl border border-orange-100 bg-[#FFF8F4] hover:border-orange-200 transition-colors">
                <span className="font-serif text-4xl font-bold text-orange-200 leading-none flex-shrink-0 mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.desc}</p>
                  <Link
                    href={step.link.href}
                    className="text-[#C4612C] text-sm font-medium hover:underline"
                  >
                    Read: {step.link.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Playbook */}
      <div id="growth" className="border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">For established sellers</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">The Growth Playbook</h2>
            <p className="text-gray-500 mt-3 max-w-lg">Pick your biggest bottleneck and go deep on it. That's how shops break through plateaus.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {growthPaths.map(path => (
              <div key={path.title} className="p-6 rounded-2xl border border-orange-100 bg-white">
                <div className="text-2xl mb-3">{path.icon}</div>
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-2">{path.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{path.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {path.links.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#C4612C] text-sm font-medium hover:underline"
                    >
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="border-t border-orange-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#C4612C] font-medium text-sm uppercase tracking-widest mb-2">Community</p>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Have a specific question?</h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Browse 15+ real questions from Etsy sellers — on pricing, SEO, photography, marketing, and more. Or ask your own. No login required.
              </p>
              <Link
                href="/community"
                className="inline-block bg-[#C4612C] text-white font-medium px-6 py-3 rounded-full hover:bg-[#a8501e] transition-colors text-sm"
              >
                Go to the Community →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {[
                'How do I know if my keywords are actually working?',
                'My competitors charge way less — should I lower my prices?',
                'What single thing got you your first 100 sales?',
              ].map(q => (
                <div key={q} className="bg-[#FFF8F4] rounded-xl px-4 py-3 border border-orange-100 text-sm text-gray-700 font-medium">
                  "{q}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <NewsletterForm />
      </div>
    </div>
  )
}
