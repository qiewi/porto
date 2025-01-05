import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A Passionate Software Engineer with Remarkable Management Skill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-screen bg-slate-100 p-4 flex justify-center items-center ${poppins.className}`}>{children}</body>
    </html>
  )
}

