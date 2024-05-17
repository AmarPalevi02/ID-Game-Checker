import React from 'react'
import HeadPage from '../atoms/HeadPage'
import { LuHandMetal } from "react-icons/lu";

const RootFf = () => {
   return (
      <div className=' w-full flex justify-center flex-col items-center relative'>
         <HeadPage>
            <p className='flex items-center gap-2 text-gray-400 py-3 bg-glass px-2'>
               Coming Soon
               <LuHandMetal className='text-2xl' />
            </p>
         </HeadPage>
      </div>
   )
}

export default RootFf