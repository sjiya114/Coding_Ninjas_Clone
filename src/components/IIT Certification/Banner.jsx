import React from 'react'

function Banner() {
  return (
    <div  className='bg-gray-50 flex flex-col items-center justify-center'>
      <p className='text-center pt-20 text-gray-500'>CODING NINJAS ADVANTAGE</p>
      <h1 className='text-center text-2xl font-bold mt-4 text-black'>With you throughout your journey</h1>
      <div className='flex flex-row max-md:flex-col max-md:justify-center max-md:items-center max-md:space-y-10 space-x-40 mt-20'>
        <div>
         <img src="https://files.codingninjas.in/course-benefit-illustration-1741082465.svg" alt="" />
        </div>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-row space-x-6'>
           <img src="https://files.codingninjas.in/frame-2087324264-1741602484.png" alt="" />
           <p className=' font-semibold text-gray-500'>Get certified by one of India’s premier institute</p>
          </div>
          <div  className='flex flex-row space-x-6'>
           <img src="https://files.codingninjas.in/frame-2087324264-1-1741602515.png" alt="" />
           <p className=' font-semibold  text-gray-500'>Teaching assistants available 7 days a week</p>
          </div>
          <div  className='flex flex-row space-x-6'>
           <img src="https://files.codingninjas.in/frame-2087324263-1741602759.webp" alt="" />
           <p className=' font-semibold  text-gray-500'>Video and chat support available</p>
          </div>
          <div  className='flex flex-row space-x-6'>
          <img src="https://files.codingninjas.in/frame-2087324262-1-1741605095.webp" alt="" />
           <p className=' font-semibold  text-gray-500'>Personalised guidance from relationship managers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
