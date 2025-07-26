import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Barba Brutal',
  description: 'Barbearia mais brutal da cidade!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.className} bg-[#1c1c1c] text-white min-h-screen antialiased`}
        style={{ backgroundColor: '#1c1c1c' }}
      >
        {children}
      </body>
    </html>
  )
}
