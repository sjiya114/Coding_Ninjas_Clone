import React from 'react'
import { assets } from '../assets/assets'

function Certification() {
  return (
    <div className=' bg-white h-100 max-md:h-full w-full flex justify-center  max-md:px-2 max-md:py-4 items-center'>
      <div className='w-[70%] h-[70%] border-2 flex flex-row max-md:flex-col max-md:space-y-6 max-md:w-full max-md:h-full items-center justify-around rounded-lg border-gray-400'>
    <img src={assets.certificate} className='rounded-lg w-[30%] max-md:w-full' alt="" />
    <p className='font-semibold  text-2xl w-[48%] max-md:text-lg max-md:font-normal max-md:w-full'>We are an approved training partner of NSDC under their scheme for market led fee-based services</p>
      </div>
    </div>
  )
}

export default Certification
