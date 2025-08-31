import React from 'react'
import Header from './Header'
import LogIn from './LogIn'

const Body = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <Header />
      <div className='absolute'>
        <img src={import.meta.env.VITE_NETFLIX_BANNER} alt='banner' />
      </div>
      <div className='absolute flex justify-center items-center inset-0'>
        <LogIn />
      </div>
    </div>
  )
}

export default Body