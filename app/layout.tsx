import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import GoHome from '@/components/GoHome'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'authy',
  description: 'authy | login | register | dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <GoHome />
      <Toaster />
      </body>
    </html>
  )
}
