import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raiwear',
  description: `Charity or second-hand shop
  upcycled clothes | thrift | customs🪡
  𝘦𝘤𝘰-𝘧𝘢𝘴𝘩𝘪𝘰𝘯 𝘧𝘰𝘳 𝘢 𝘤𝘰𝘯𝘴𝘤𝘪𝘰𝘶𝘴 𝘭𝘪𝘧𝘦𝘴𝘵𝘺𝘭𝘦
  founder: nsovombie`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " h-screen flex flex-col justify-between"}>
        <Header />
        <div className='pt-10 md:pt-52 -z-10'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
