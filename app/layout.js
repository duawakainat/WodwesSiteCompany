import { Inter } from 'next/font/google'
import './globals.css'
import Section1 from '@/components/Section1'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wodwes',
  description: 'Wodwes is Wonderfull Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     

      <body className={inter.className}>
      <div className="bg-black">
     <Section1/>  
     </div>
     <Navbar/>
     <div >
        {children}
     <Footer/></div>
        </body>
    </html>
  )
}
