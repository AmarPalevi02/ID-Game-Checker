import React from 'react'
import { motion } from 'framer-motion'

const ResultUserName = ({ children }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
         className="bg-glass py-4 pl-3"
      >
         {children}
      </motion.div>
   )
}

export default ResultUserName