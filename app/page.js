import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blogs from './components/Blogs'

const page = () => {
  return (
    <>
    <header className='flex items-center justify-between bg-slate-300'>
      <h1 className='font-medium px-4 py-4 pl-8'>GreatZone</h1>
      <Navbar/>
      </header>
      <main className=''>
        <Hero/>
        <Blogs/>
      </main>
    </>
  )
}

export default page