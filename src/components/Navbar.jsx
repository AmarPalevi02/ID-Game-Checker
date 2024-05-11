import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
   const [togle, setTogle] = useState(false)
   console.log(togle)
   return (
      <nav className='px-3 py-4'>
         <div className="flex justify-between items-cente">
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
            <div className="flex justify-end py-4 pr-3">
               <RiCloseLargeLine
                  className='text-2xl font-bold text-stone-400 '
                  onClick={() => setTogle(!togle)}
               />

            </div>
            <ul>
               <li>Menu Item 1</li>
               <li>Menu Item 2</li>
               <li>Menu Item 3</li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar