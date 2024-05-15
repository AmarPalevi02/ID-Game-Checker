import React from 'react'

import { motion } from 'framer-motion';

const Descriptions = () => {
   return (
      <div className='absolute w-full flex justify-center items-center top-[37%] md:top-[20%]'>
         <div className="bg-hero-glas max-w-xl relative p-5 text-gray-400 ">
            <h2 className='font-semibold mb-2 text-xl'>Welcome to <span className='bg-[#4A4B70] px-1 rounded-md'>ID Game Checker!</span></h2>
            <motion.p
               className='mb-2'
               initial={{ y: -50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >Temukan <span className='bg-[#332C71] px-1 rounded-md'>ID game</span>  Anda dari berbagai platform gaming dengan mudah di sini. ID Game Checker memungkinkan Anda untuk mencari ID game Anda dari PlayStation, Xbox, Steam, Nintendo Switch, dan banyak lagi, <span className='bg-[#332C71] px-1 rounded-md'>semua dalam satu tempat.</span> 
            </motion.p >

            <motion.p
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.4 }}
            >
               <span className='bg-[#332C71] px-1 rounded-md'>Cukup ketikkan ID game Anda di kotak pencarian</span>, dan kami akan memberikan hasilnya secara instan. Apakah Anda mencari ID PSN, Gamertag Xbox, ID Steam, atau ID platform lainnya? Kami punya semuanya!
            </motion.p>
         </div>
      </div>
   )
}

export default Descriptions