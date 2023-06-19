import React from 'react'

const Layout = ({children}:any) => {
  return (
    <main className='min-h-full bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900 mx-auto '>  
        {children}
    </main>
  )
}

export default Layout;