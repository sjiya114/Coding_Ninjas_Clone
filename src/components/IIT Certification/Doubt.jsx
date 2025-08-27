import React from 'react'
import Phone from './Phone'
import doubtpage from '../../assets/doubtpage.webp';

function Doubt() {
  return (
    <div className='bg-gray-50'>
       <p className='text-center pt-20 text-gray-500'>GOT DOUBTS</p>
      <h1 className='text-center text-2xl font-bold text-black'>We are here to help you out</h1>
      <div className='ml-[18%] flex flex-row space-x-10'>
        <div >
            <img className='mt-20' src={doubtpage} alt="" />
        </div>
        <div className='w-[40%]'>
            <Phone/>
        </div>
      </div>
    </div>
  )
}

export default Doubt
