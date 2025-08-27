import React from 'react'

function Broucher() {
  return (
    <div className='flex flex-col items-center mt-20 mb-20 justify-center'>
        <p className='text-2xl mb-10 font-semibold'>Job Bootcamp brochure</p>
      <div className='rounded-4xl w-fit flex flex-row space-x-10 justify-around px-4 py-2'> 
        <button className='text-white bg-black px-4 py-2 rounded-2xl'>Download MERN Brochure</button>
        <button className='text-white bg-black px-4 py-2 rounded-2xl'>Download Springboot Brochure</button>
      </div>
    </div>
  )
}

export default Broucher
