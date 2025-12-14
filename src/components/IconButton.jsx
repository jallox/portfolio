import React from 'react'

function IconButton({ children }) {
  return (
    <div className="bg-gray-500/10 text-white rounded-xl py-2 px-2 hover:bg-gray-900 hover:border-gray-600 transition-colors duration-300 cursor-pointer border-2 border-gray-700">
      {children}
    </div>
  )
}

export default IconButton