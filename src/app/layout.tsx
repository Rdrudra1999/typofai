import './globals.css'
import { Inter , Mr_De_Haviland} from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const mrDeHaviland = Mr_De_Haviland({
  subsets: ['latin-ext'],
  weight: '400'
})
// meta tag and meta description


export const metadata = {
  title: 'TYPOF AI',
  description: 'Typof AI is an AI-Powered Ecommerce Platform that helps you to create your online store in minutes.',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        </Head> 
        <body className={`${inter.className} h-full`}>
          {children}
      </body>
    </html>
  )
}
