import type { Metadata } from 'next'
import './globals.css'
import Header from './_components/layouts/header/Header'
import Footer from './_components/layouts/footer/Footer'
 
export const metadata: Metadata = {
  title: 'App',
  description: 'App',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className='bg-base-200/50'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    // </ClerkProvider>
  )
}
