import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Redis Next.js Starter',
  description: 'A simple Next.js app with Redis as the database',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
