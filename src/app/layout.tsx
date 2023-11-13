import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import config from '@/lib/config'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
