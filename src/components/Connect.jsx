import React from 'react'
import { assets } from '../assets/assets'

function Connect() {
  return (
    <div className='bg-[#302219]  h-screen'>
        <div className='flex flex-row justify-evenly pt-40 py-20 border-gray-500 max-w-screen-xl mx-auto border-b-1  text-white'>

           <div>
        <img src={assets.image} className='mb-4' alt="" />
        <h1 className='font-bold'>Contact us</h1>
      <ol >
        <li></li>
        <li></li>
      </ol>
      <h1 className='font-bold pb-4'>Our offerings</h1>
      <ol>
        <li> <img src="" alt="" />  </li>
        <li> <img src="" alt="" /> </li>
      </ol>
    </div>
    <div>
        <h1 className='font-bold pb-4'>Coding Ninjas</h1>
       <ol  className='flex flex-col space-y-2 text-sm'>
        <li>Careers</li>
        <li>Privacy policy</li>
        <li>Terms & conditions</li>
        <li>Pricing and fund policy</li>
        <li>Bug bouty</li>
        <li>Review</li>
        <li>Press release</li>
       </ol>
    </div>
    <div>
        <h1 className='font-bold pb-4'>Products</h1>
      <ol  className='flex flex-col space-y-2 text-sm'>
        <li>Job Bootcamp</li>
        <li>Code 360</li>
        <li>Professional Certifications</li>
        <li>Student Certifications</li>
      </ol>
    </div>
    <div>
        <h1 className='font-bold pb-4'>Community</h1>
      <ol className='flex flex-col space-y-2 text-sm'>
        <li>10X Club</li>
        <li>Student Chapters</li>
        <li>Hire from us</li>
      </ol>
    </div>

        </div>
        <div className='text-white text-sm max-w-screen-xl mx-auto mt-10 font-semibold'>
            <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        </div>
   
    </div>
  )
}

export default Connect
