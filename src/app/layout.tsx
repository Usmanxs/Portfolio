'use client';
import './globals.css'
import { Poppins } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-black text-black dark:text-white  m-0 w-full`}>
    
          {children}
       
        </body>
      </ThemeProvider>
    </html>
  )
}
