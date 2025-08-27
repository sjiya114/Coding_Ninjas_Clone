import React from 'react'
import { assets } from '../assets/assets'

function Certification() {
  return (
    <div className=' bg-white h-100 w-full flex justify-center items-center'>
      <div className='w-[70%] h-[70%] border-1 flex flex-row items-center justify-around rounded-lg border-gray-400'>
    <img src={assets.certificate} className='rounded-lg w-[30%]' alt="" />
    <p className='font-semibold text-2xl w-[48%]'>We are an approved training partner of NSDC under their scheme for market led fee-based services</p>
      </div>
    </div>
  )
}

export default Certification
