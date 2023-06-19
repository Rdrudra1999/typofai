import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']})
const Loading = () => {
  return (
    <div className={`w-full min-h-screen  flex justify-center items-center flex-col ${inter.className}`}>
            <Image src='/Loader.svg' alt='loader' width={100} height={100} className='animate-bounce text-deep-orange-500' />
            {/* <h1 className='font-bold text-xl tracking-widest capitalize text'>LinktypAI</h1> */}
    </div>
  )
}

export default Loading;