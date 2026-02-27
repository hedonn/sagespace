import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const nunito = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Sage The Space | Energy Healing & Wellness | Walnut Creek, CA',
  description: 'Transform your energy and space with holistic healing services in Walnut Creek, CA. Reiki, energy healing, space clearing, and wellness consultations.',
  keywords: ['energy healing', 'reiki', 'space clearing', 'wellness', 'Walnut Creek', 'holistic healing'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
