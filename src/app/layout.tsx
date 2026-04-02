import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SellerBuds — The Magazine for Etsy Sellers',
  description: 'Growth strategies, marketing tips, pricing guides, and real stories from successful Etsy sellers.',
  openGraph: {
    title: 'SellerBuds — The Magazine for Etsy Sellers',
    description: 'Growth strategies, marketing tips, pricing guides, and real stories from successful Etsy sellers.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: '#FFF8F4' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
