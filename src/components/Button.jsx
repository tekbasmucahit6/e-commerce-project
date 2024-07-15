import React from 'react'

function Button({feature}) {
  return (
    <>
        <button className='bg-blue-600 px-6 py-3 text-white text-2xl rounded'>{feature}</button>
    </>
  )
}

export default Button