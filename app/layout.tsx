import '@/assets/css/fonts.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import config from '@/lib/config'
import { ReactNode } from 'react'
import Header from '@/components/layouts/header/header'
import CustomProvider from '@/components/common/custom-provider/custom-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription
}

const RootLayout = ({ children }: {
  children: ReactNode
}) => (
  <html lang='en'>
  <body className={inter.className}>
  <Header />
  <main>
    <CustomProvider>{children}</CustomProvider>
  </main>
  </body>
  </html>
)
export default RootLayout
