import React from 'react'

import {heroVideo} from '../../assets'
import Descriptions from './Descriptions'

const Hero = () => {
   return (
      <div className="w-full relative overflow-y-hidden h-screen ">
         <video
            src={heroVideo}
            loop
            type='video/mp4'
            autoPlay
            muted
            controls={false}
            className='-rotate-90 object-cover object-center  w-full aspect-square '
         />
         <div className="absolute w-[100%] h-[100vh] bg-blackOverlay top-0 ">
            <div className="h-full ">
               <Descriptions />
            </div>
         </div>
      </div>
   )
}

export default Hero