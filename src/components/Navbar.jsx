import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

import { navItem } from '../consts/navItems'

const Navbar = () => {
   const [togle, setTogle] = useState(false)
   const navigate = useNavigate()
   const [prevScroll, setPrevcroll] = useState(0)
   const [isScroll, setIsScroll] = useState(true)

   const handleScroll = () => {
      const currentScroll = window.scrollY
      const isScrollUp = currentScroll < prevScroll

      setIsScroll(() => {
         return isScrollUp || currentScroll < 50
      })

      setPrevcroll(currentScroll)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [prevScroll])

   return (
      <nav className='relative w-full z-40 '>
         <div className={`flex fixed justify-between items-cente w-full py-4 px-4 ${isScroll ? "" : "bg-glass ease-in-out "}`}>
            <h2 className='text-stone-400 font-bold'>ID Game Checker</h2>
            {togle ? (
               ""
            ) : (
               <AiOutlineMenuFold
                  className='text-3xl font-bold text-stone-400 md:hidden'
                  onClick={() => setTogle(!togle)}
               />
            )}

            <div className="hidden md:block ">
               <ul className="flex gap-4  ">
                  {navItem.map((menu, i) => {
                     return (
                        <li
                           key={i}
                           onClick={() => navigate(`${menu.path}`)}
                           className='cursor-pointer'
                        >
                           {menu.menu}
                        </li>
                     )
                  })}
               </ul>
            </div>
         </div>

         <div className={`sidebar ${togle ? 'open' : ''} bg-black-gradient`}>
            <div className="flex justify-end py-4 pr-4">
               <RiCloseLargeLine
                  className='text-2xl font-bold text-stone-400 '
                  onClick={() => setTogle(!togle)}
               />
            </div>
            <ul>
               {navItem.map((menu, i) => {
                  return (
                     <li
                        key={i}
                        onClick={() => navigate(`${menu.path}`)}
                     >
                        {menu.menu}
                     </li>
                  )
               })}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar