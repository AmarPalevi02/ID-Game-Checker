import React from 'react'
import Navbar from '../components/Navbar'
import LayoutRoutePage from '../components/LayoutRoutePage'

const IndexPage = () => {
  return (
    <div className='h-[100vh] w-[100%] bg-black-gradient'>
      <div className="">
        <Navbar />
      </div>
      <div className="w-full ">
        <LayoutRoutePage />
      </div>
    </div>
  )
}

export default IndexPage