import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: 'Play The Line | DJ & Producer',
  description: 'Official website of Play The Line - Electronic Music DJ and Producer',
  openGraph: {
    title: 'Play The Line',
    description: 'Electronic Music DJ & Producer',
    images: [
      {
        url: '/assets/branding/Logo3.jpg',
        width: 1200,
        height: 630,
        alt: 'Play The Line',
      },
    ],
    siteName: 'Play The Line',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play The Line',
    description: 'Electronic Music DJ & Producer',
    images: ['/assets/branding/Logo3.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
