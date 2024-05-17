import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PUBG from '../pages/PUBG'

const PUBGRoute = () => {
   return (
      <Routes>
         <Route path='/' element={<PUBG />} />
      </Routes>
   )
}

export default PUBGRoute