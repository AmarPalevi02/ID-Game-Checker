import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MobileLegendsRoute from './MobileLegendsRoute'
import IndexPage from '../pages/IndexPage'
import PUBGRoute from './PUBGRoute'

const AppRoute = () => {
   return (
      <Routes>
         <Route
            path='/*'
            element={
               <>
                  <IndexPage />
               </>
            }
         >
            <Route path='*' element={<Home />} />
            <Route path='mobile-legends/*' element={<MobileLegendsRoute />} />
            <Route path='pubgm/*' element={<PUBGRoute />} />
         </Route>
      </Routes>
   )
}

export default AppRoute