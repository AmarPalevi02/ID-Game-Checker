import React from 'react'

const Button = ({ action, loading, disabled, children }) => {
   return (
      <button
         onClick={action}
         disabled={disabled || loading}
         class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
         {loading ? 'Loading..' : children }
      </button>
   )
}

export default Button