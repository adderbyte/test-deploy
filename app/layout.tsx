// app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Crucial for Tailwind CSS

// 1. Import your Header component
//    Adjust the path if your Header.tsx/js is not directly in the 'components' folder.
//import Header from '../components/Header'; // Assuming Header.tsx/js is in a 'components' folder one level up

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polymarq - Building the Intelligence Layer for Real-World Systems',
  description: 'Polymarq empowers cities, enterprises, and service providers to coordinate better, respond faster, and optimize smarter — turning everyday decisions into intelligent actions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* 2. Render your Header component here */}
        
        {/* This is where your page content will be rendered */}
        {children}
      </body>
    </html>
  )
}