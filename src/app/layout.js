import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prestine',
  description: 'Seamless dry cleaning operations with Prestine. Tailor-made solutions for efficiency, customization, and an enhanced customer experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} fx-center fx-column`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
