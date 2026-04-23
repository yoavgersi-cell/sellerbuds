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
    url: 'https://www.sellerbuds.com',
    siteName: 'SellerBuds',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'SellerBuds — The Magazine for Etsy Sellers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SellerBuds — The Magazine for Etsy Sellers',
    description: 'Growth strategies, marketing tips, pricing guides, and real stories from successful Etsy sellers.',
    images: ['https://images.unsplash.com/photo-1657256031812-4702fe316f1b?w=1200&q=80'],
  },
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
