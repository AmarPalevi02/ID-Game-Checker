import React from 'react'

import { heroVideo } from '../assets'

const Home = () => {
  return (
    <div className='w-full'>
      <div className="w-full relative overflow-y-hidden h-screen ">
        <video
          src={heroVideo}
          loop
          type='video/mp4'
          autoPlay
          muted
          controls={false}
          className='-rotate-90 object-cover object-center  w-full aspect-square bg-red-400 '
        />
      </div>
    </div>
  )
}

export default Home