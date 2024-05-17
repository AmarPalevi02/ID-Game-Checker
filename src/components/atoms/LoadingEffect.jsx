import React from 'react'

const LoadingEffect = () => {
   return (
      <div className="flex items-center justify-center ">
         <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-50"></div>
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-800">
               <div className="text-white text-lg font-bold">Loading...</div>
            </div>
         </div>
      </div>

   )
}

export default LoadingEffect