import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FF from '../pages/FF'

const FfRoute = () => {
   return (
      <Routes>
         <Route path='/' element={<FF />} />
      </Routes>
   )
}

export default FfRoute