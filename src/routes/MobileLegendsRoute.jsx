import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MobileLegends from '../pages/MobileLegends'

const MobileLegendsRoute = () => {
  return (
      <Routes>
         <Route path={'/'} element={<MobileLegends />} />
      </Routes>
  )
}

export default MobileLegendsRoute