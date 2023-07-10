import Navbar from '@/components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'



const roboto = Roboto({
  weight: ["300", "500", "700"],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Moviez',
  description: 'An app to get information about all the trending, popular, latest, best rated movies on the internet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-900 text-slate-100`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
