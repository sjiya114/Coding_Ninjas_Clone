import React from 'react'

function Placement() {
  return (
    <div className='pb-20'>
      <h1 className='text-center font-semibold text-3xl my-20'>Placement Benefits</h1>
      <div className='flex flex-row max-w-lg:flex-col max-w-screen-xl mx-auto space-x-2  flex-wrap justify-center items-centers'>
      <div  className='flex flex-col w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.com/download-1711002828.webp" alt="" />
        <p className='font-bold'>Profiles highlighted on hirist.com</p>
        <p className='text-gray-500 '>Get access to an abundance of job openings</p>
      </div>
      <div  className='flex flex-col  w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.com/interview_experience_fill-1712577325.webp" alt="" />
        <p className='font-bold'>1200+ Companies Hiring</p>
        <p className='text-gray-500 '>Expanded job search with a vast network of companies hiring.</p>
      </div>
      <div  className='flex flex-col  w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.in/send-hiring-process-1712577294.webp" alt="" />
        <p className='font-bold'>Profiles highlighted on naukri.com</p>
        <p className='text-gray-500 '>Make a distinct mark for yourself on India's leading job portal.</p>
      </div>
      <div  className='flex flex-col  w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.in/referal-network-1712577293.webp" alt="" />
        <p className='font-bold'>Dedicated placement team</p>
        <p className='text-gray-500 '>Guiding and motivating you every step of the way.</p>
      </div>
      <div  className='flex flex-col  w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.in/access-to-jobs-1712577292.webp" alt="" />
        <p className='font-bold'>50+ Members placement team</p>
        <p className='text-gray-500 '>A dedicated team to help you get placed in your dream company.</p>
      </div>
      <div className='flex flex-col w-100 h-40 px-4 py-4 space-y-2'>
        <img className='w-10 h-10' src="https://files.codingninjas.in/job-openings-1712577291.webp" alt="" />
        <p className='font-bold'>Job openings shared every day</p>
        <p className='text-gray-500 '>We send job openings daily to your WhatsApp directly</p>
      </div>
    </div>
    <div className='flex items-center justify-center space-x-6 my-6'>
       <button className='border-2 border-black px-2 py-2 w-fit h-fit rounded-lg'>Request Callback</button>
    <button className='text-white bg-orange-700 px-2 py-2 w-fit h-fit rounded-lg'>Book a free webinar</button>
    </div>
    
    </div>
  )
}

export default Placement
