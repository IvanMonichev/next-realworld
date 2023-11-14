import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/css/globals.css'
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
}) => {
  return (
    <html lang='en'>
    <head>
      <link rel='stylesheet' href='//demo.productionready.io/main.css' />
      <link
        rel='stylesheet'
        href='//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
      />
      <link
        rel='stylesheet'
        href='//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap'
      />
    </head>
    <body className={inter.className}>
    <Header />
    <main><CustomProvider>{children}</CustomProvider></main>
    </body>
    </html>
  )
}

export default RootLayout
