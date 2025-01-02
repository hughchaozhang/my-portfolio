import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hugh\'s Portfolio',
  description: 'Personal portfolio and web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <nav className="p-4 bg-gray-800">
          <div className="container mx-auto flex gap-4">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/apps" className="hover:text-blue-400">Apps</a>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}