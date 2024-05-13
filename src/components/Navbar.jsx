import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const [togle, setTogle] = useState(false)
   const navigate = useNavigate()

   return (
      <nav className='relative bg-gray-300'>
         <div className="flex justify-between items-cente w-full py-4 px-4">
            <h2 className='text-stone-400 font-bold'>ID Game Checker</h2>
            {togle ? (
               ""
            ) : (
               <AiOutlineMenuFold
                  className='text-3xl font-bold text-stone-400 md:hidden'
                  onClick={() => setTogle(!togle)}
               />
            )}
         </div>
         <div className={`sidebar ${togle ? 'open' : ''}`}>
            <div className="flex justify-end py-4 pr-4">
               <RiCloseLargeLine
                  className='text-2xl font-bold text-stone-400 '
                  onClick={() => setTogle(!togle)}
               />
            </div>
            <ul>
               <li
                  onClick={() => navigate('/')}
               >Home</li>
               <li 
                  onClick={() => navigate('/mobile-legends')}
               >Moboile Lagned</li>
               <li>Menu Item 3</li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar