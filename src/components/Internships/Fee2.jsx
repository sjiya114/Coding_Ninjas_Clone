import React from 'react'

function Fee2() {
  return (
    <div className='bg-white py-20'>
       <div className='flex flex-col  max-w-screen-xl max-md:w-full max-md:mx-4 mx-auto space-y-6'>
      <p className='font-bold text-3xl'>Join Now <span className='text-indigo-600'>Limited</span>  Seats Left</p>
        <div className='flex flex-row max-md:flex-col max-md:justify-center max-md:items-center space-x-4'>
          <div className='flex flex-col space-y-5'>
             <button  className='text-white font-bold bg-indigo-500 rounded-md px-2 py-2 w-60 h-20'>Total Program Fee
₹79,999</button>
  <button className='text-indigo-600 border-2 border-indigo-600 px-2 py-2 w-60 h-20 rounded-md'>Book your seat now
₹2,500</button>
          </div>
<div className='flex flex-col max-md:justify-center max-md:items-center space-y-4'>
  <p className='font-bold'>Pay in instalments, as low as</p>
  <p className='font-bold text-2xl'>₹ 6,458/month</p>
  <p  className='font-bold text-gray-600 '>No Cost EMI available up to 12 months</p>
  <p>We have partnered with the following financial companies to provide competitive finance options at as low as 0% interest.</p>
  <div>
    <img className='w-60 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/EMI_Partners-removebg-preview.png" alt="" />
  </div>
   <button className='text-white bg-indigo-800 px-4 py-2 w-fit h-fit rounded-lg'>Enroll Now</button>
        </div>
</div>
    </div>
    </div>
    
  )
}

export default Fee2
