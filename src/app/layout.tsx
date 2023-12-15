import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/primaries/header/Header'
import Footer from '@/components/primaries/footer/Footer'






// User SideBar
import SideBar from '@/components/primaries/user-panel/SideBar'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import React Vertical Time-Line Css
import 'react-vertical-timeline-component/style.min.css';

// react-circular-progressbar Style Css
import 'react-circular-progressbar/dist/styles.css';






const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ممبرلند',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
