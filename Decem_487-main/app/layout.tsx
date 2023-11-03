import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import AnnouncementBar from '@/components/AnnouncementBar'
const inter = Spectral({ subsets: ['cyrillic'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: 'London Dry | 10% ABV Gin Alternative - Decem',
  description: 'LONDON DRY is the perfect alternative to Gin or alcohol free Gin, with 10% ABV and 25 calories per serve. Serve with Indian Tonic or in cocktails as a Tom Collins, Martini or Gimlet. Free UK delivery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <AnnouncementBar/>
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  )
}
