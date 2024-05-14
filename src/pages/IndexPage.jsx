import React from 'react'
import Navbar from '../components/Navbar'
import LayoutRoutePage from '../components/LayoutRoutePage'

const IndexPage = () => {
  return (
    <div className='h-[100vh] w-[100%] bg-black-gradient relative '>
      <div className="">
        <Navbar />
      </div>
      <div className="w-full h-full relative ">
        <LayoutRoutePage />
      </div>
    </div>
  )
}

export default IndexPage