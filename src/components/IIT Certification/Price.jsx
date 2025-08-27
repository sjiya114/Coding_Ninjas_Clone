import React from 'react'
import { assets } from '../../assets/assets'

function Price({heading,price,discount}) {
  return (
    <div className='w-full flex flex-col mt-20 space-y-6 justify-center items-center '>
       <p className='text-gray-500'>COURSE PRICING</p>
       <p className='font-bold text-2xl '>One plan for every learner</p>
       <div className='border-1 w-fit px-4 py-4 flex flex-col space-y-4 border-gray-500 rounded-lg'>
         <h1 className='font-semibold text-xl'>{heading}</h1>
         <div className='flex flex-row space-x-6'>
            <img src={assets.tick} alt="" />
            <p>Guest lectures by IIT faculty</p>
         </div>
          <div  className='flex flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>1:1 live doubt support (Unlimited)</p>
         </div>
          <div  className='flex flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>Relationship manager</p>
         </div>
          <div  className='flex flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>1:1 Domain Expert Sessions</p>
         </div>
          <div  className='flex flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>Full fees refundable within 7 days</p>
         </div>
          <div  className='flex flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>Orientation at E&ICT IIT Guwahati</p>
         </div>
          <div  className='flex border-b-2 pb-6 border-gray-400 flex-row space-x-6'>
            <img src={assets.tick}  alt="" />
            <p>Graduation ceremony at E&ICT IIT Guwahati</p>
         </div>
           <div className='flex flex-row  space-x-4'>
            <div className='flex flex-col space-y-2'>
              <p className='text-xl font-semibold'></p>
              <p className='text-gray-400'>EMI starting at ₹ 5911/ month</p>
            </div>
             <button className='text-white bg-orange-700 rounded-lg px-4 py-1'>Apply Now</button>
           </div>
       </div>
    </div>
  )
}

export default Price
