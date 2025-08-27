import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='bg-blue-950 h-screen'>
        <div className='flex flex-row max-md:flex-col justify-evenly pt-40 py-20 border-gray-500 max-w-screen-xl mx-auto border-b-1  text-white'>

           <div>
        <img src={assets.image} className='mb-4' alt="" />
        <h1 className='font-bold'>Contact us</h1>
      <ol >
        <li>1800-123-3598</li>
        <li>
contact@codingninjas.com</li>
      </ol>
       <div>
        <div>
        <img src="" alt="" />
          <p>Instagram</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Facebook</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>LinkedIn</p>
        </div>
         <div>
           <img src="" alt="" />
          <p>X(Twitter)</p>
         </div>
          <div>
           <img src="" alt="" />
          <p>Youtube</p>
         </div>
       </div>
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
   
    </div>
  )
}

export default Footer
