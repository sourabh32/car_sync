import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit } from 'next/font/google'
import CarProvider from '@/context/CarContext'
import { QueryProvider } from '../context/QueryContext'

import { RideProvider } from '@/context/RideContext'

import UserProvider from '@/context/UserContexr'
import { Toaster } from 'react-hot-toast'
import NavBar from '@/components/NavBar'
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarSync',
  description: 'Best car rentals in the town.',
  icons: {
    icon: '/next.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <UserProvider>
      <CarProvider>
     
        <RideProvider >
        <QueryProvider>
      <body className={outfit.className}>
       <NavBar />
       <Toaster />
        {children}</body>
        </QueryProvider>
        </RideProvider>
      
      </CarProvider>
      </UserProvider>
      
    </html>
  )
}
