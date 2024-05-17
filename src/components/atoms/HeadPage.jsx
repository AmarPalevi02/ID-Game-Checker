import React from 'react'
import { motion } from 'framer-motion'

const HeadPage = ({ children }) => {
   return (
      <motion.div
         className=" px-3 mb-5 md:w-96"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
      >
         {children}
      </motion.div>
   )
}

export default HeadPage