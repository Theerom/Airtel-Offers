import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free 10GB Airtel Data',
  description: 'Get your free 10GB data from Airtel! Limited time offer.',
  openGraph: {
    title: 'Free 10GB Airtel Data',
    description: 'Get your free 10GB data from Airtel! Limited time offer.',
    url: 'https://airtel-offers.vercel.app',
    siteName: 'Airtel Offers',
    images: [
      {
        url: '/ico.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 10GB Airtel Data',
    description: 'Get your free 10GB data from Airtel! Limited time offer.',
    images: ['/ico.png'],
  },
  icons: {
    icon: '/ico.png',
    apple: '/ico.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ico.png" />
        <link rel="apple-touch-icon" href="/ico.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
