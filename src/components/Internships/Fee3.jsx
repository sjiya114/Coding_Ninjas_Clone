import React from 'react'

function Fee3() {
  return (
    <div className=' bg-white py-20 '>
      <div className='flex flex-col max-w-screen-xl mx-auto space-y-6'>
      <p className='font-bold text-3xl'>Join Now <span className='text-indigo-600'>Limited</span>  Seats Left</p>
          <div className='flex flex-row border-t-1 border-b-1 py-10 space-x-5'>
             <button className='text-white font-bold bg-indigo-500 rounded-md px-2 py-2 w-60 h-20'>Total Program Fee
₹79,999</button>
           <div className='flex flex-col space-y-4'>
            <p className='text-indigo-600 font-bold text-xl'>Full stack web development with Gen AI + DSA</p>
            <div className='flex flex-row justify-between'>
              <div>
                <p>Duration</p>
                <p className='font-bold'>9 months</p>
              </div>
              <div>
                <p>Course Pause</p>
                <p className='font-bold'>60 days</p>
              </div>
              <button className='text-white bg-indigo-800 px-4 py-2 rounded-lg'>Enroll Now</button>
            </div>
           </div>
          </div>
          <div className='flex flex-row space-x-6'>
            <button className='text-indigo-600 border-2 border-indigo-600 px-2 py-2 w-60 h-20 rounded-md' >Book your seat now
₹2,500</button>
              <div className='flex flex-col space-y-4'>
  <p className='font-bold'>Pay in instalments, as low as</p>
  <p className='font-bold text-2xl'>₹ 6,458/month</p>
  <p className='font-bold text-gray-600 '>No Cost EMI available up to 12 months</p>
  <div className='flex flex-row space-x-4'>
   <p>We have partnered with the following financial companies to provide competitive finance options at as low as 0% interest.</p>
  <div>
    <img className='w-40 h-8' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/EMI_Partners-removebg-preview.png" alt="" />
  </div>
  </div>

        </div>
          </div>
          </div>
    </div>
    
  )
}

export default Fee3
