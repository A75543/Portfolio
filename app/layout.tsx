import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alberto Rosas',
  description: 'Portfolio',
  generator: 'Alberto Rosas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
