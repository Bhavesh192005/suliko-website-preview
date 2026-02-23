import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: 'Suliko Restaurant | The Soul of Georgian Cuisine',
  description: 'Experience authentic Georgian and European cuisine at Suliko Restaurant in Concord, Ontario. Traditional khachapuri, khinkali, grilled meats, and more.',
  keywords: ['Georgian restaurant', 'Suliko', 'khachapuri', 'khinkali', 'Concord Ontario', 'Georgian cuisine', 'European cuisine'],
}

export const viewport: Viewport = {
  themeColor: '#6B2D14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
