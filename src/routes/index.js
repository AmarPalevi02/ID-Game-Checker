import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MobileLegendsRoute from './MobileLegendsRoute'
import IndexPage from '../pages/IndexPage'
import PUBGRoute from './PUBGRoute'
import FfRoute from './FfRoute'

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
            <Route path='free-fire/*' element={<FfRoute />} />
         </Route>
      </Routes>
   )
}

export default AppRoute