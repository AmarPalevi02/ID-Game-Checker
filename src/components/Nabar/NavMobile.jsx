import React from 'react'
import { RiCloseLargeLine } from "react-icons/ri";

import { navItem } from '../../consts/navItems'

const NavMobile = ({ togle, setTogle, navigate }) => {
   return (
      <>
         <div className={`sidebar ${togle ? 'open' : ''} bg-black-gradient`}>
            <div className="flex justify-end py-4 pr-4">
               <RiCloseLargeLine
                  className='text-2xl font-bold text-stone-400 '
                  onClick={() => setTogle(!togle)}
               />
            </div>
            <ul className='pl-3'>
               {navItem.map((menu, i) => {
                  return (
                     <li
                        key={i}
                        onClick={() => navigate(`${menu.path}`)}
                        className='text-md text-gray-400 font-semibold mb-3'
                     >
                        {menu.menu}
                     </li>
                  )
               })}
            </ul>
         </div>
      </>
   )
}

export default NavMobile