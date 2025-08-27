import React from 'react'

function Plan() {
  return (
    <div className='flex flex-col items-center mt-20 mb-20 justify-center'>
        <p className='text-2xl mb-10 font-semibold'>Plans and pricing</p>
      <div className='rounded-4xl w-fit flex flex-row space-x-10 justify-around px-4 py-2 bg-indigo-200'> 
        <div className='flex flex-row mt-2 ml-2 space-x-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.com/mern-32957.png" alt="" />
        <p className='text-2xl font-semibold text-indigo-800'>MERN</p>
        </div>
        <div className='flex flex-row rounded-4xl px-4 py-2 space-x-2 bg-white'>
          <img className='w-10 h-10' src="https://files.codingninjas.in/bootspring-navigation-29430.svg" alt="" />
          <p className='text-2xl font-semibold text-indigo-800'>SpringBoot</p>
        </div>
      </div>
    </div>
  )
}

export default Plan
