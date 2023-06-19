import './globals.css'
import { Inter , Mr_De_Haviland} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const mrDeHaviland = Mr_De_Haviland({
  subsets: ['latin-ext'],
  weight: '400'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        {/* <div className='bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900 mx-auto h-full' > */}
          {children}
        {/* </div> */}
      </body>
    </html>
  )
}