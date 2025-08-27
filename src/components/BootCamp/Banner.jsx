import React from 'react'

function Banner() {
  return (
    <div className='flex items-center justify-center'>
       <div className='bg-black rounded-2xl px-10 py-10 w-fit'>
       <p className='text-lg font-bold'>Our learners bring varied backgrounds and experiences</p>
       <div className='flex flex-row flex-wrap'>
          <div className='bg-zinc-900 w-40 mt-20 h-40 flex flex-col items-center justify-center  shadow-sm shadow-red-400  rounded-full text-white'>
            <p>Non-CS</p>
            <span className='font-bold'>20%</span>
          </div>
          <div className='bg-zinc-900 shadow-sm mt-5 w-36 h-36 flex flex-col items-center justify-center  shadow-blue-500 rounded-full text-white'>
            <p>Final Year Students</p>
            <span className='font-bold'>15%</span>
          </div>
          <div className='bg-zinc-900 shadow-sm mt-4 w-60 h-60 flex flex-col items-center justify-center  shadow-yellow-400 rounded-full text-white'>
            <p>Non-tech roles</p>
            <span className='font-bold'>37%</span>
          </div>
          <div className='bg-zinc-900 shadow-sm mt-10 w-20 h-20 flex flex-col items-center justify-center  rounded-full shadow-purple-600 text-white'>
            <p>Others</p>
            <span className='font-bold'>7%</span>
          </div>
          <div className='bg-zinc-900 shadow-sm mt-20 w-45 h-45 flex flex-col items-center justify-center  rounded-full shadow-green-400 text-white'>
            <p>Tech roles</p>
            <span className='font-bold'>21%</span>
          </div>
       </div>
    </div>
    </div>
   
  )
}

export default Banner
