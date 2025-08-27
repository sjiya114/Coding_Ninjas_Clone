import React from 'react'

function Faculty() {
  return (
    <div  className='bg-gray-50 flex flex-col mt-20 items-center justify-center'>
      <p className='text-center pt-20 text-gray-500'>FACULTY</p>
      <h1 className='text-center text-2xl font-bold text-black'>Learn from the best in the industry</h1>
       <div className='flex flex-row space-x-2 border-1 mt-10 border-gray-300'>
         <div className='flex flex-col justify-center rounded-lg px-4 py-4 items-center  space-y-2 border-r-1 border-gray-400'>
        <img  className='w-30 h-30' src="https://files.codingninjas.in/screenshot-2025-02-21-at-2-06-48-pm-1-1742204751.webp" alt="" />
        <p className=' text-gray-500'>Gaurav Trivedi</p>
        <p className='font-semibold'>Prof. EEE department & principal Investigator</p>
        <img className='w-40 h-8' src="https://files.codingninjas.in/frame-1000004773-1742207830.webp" alt="" />
      </div>
      <div className='flex flex-col w-[300px] px-2 py-2 rounded-lg'>
        <img className='w-10 h-10 ml-[80%]' src="https://files.codingninjas.in/quote-icon-walnut-1741766834.svg" alt="" />
        <p className=' text-gray-500 text-wrap'>Your journey in this certification program will be transformative, equipping you with the knowledge and experience to achieve your career aspirations.</p>
      </div>
       </div>
      
    </div>
  )
}

export default Faculty
