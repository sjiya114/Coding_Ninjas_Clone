import React from 'react'
import { campusData } from '../../assets/assets'

function Campus() {
  return (
   <div  className='bg-gray-50 flex flex-col max-md:ml-10 max-md:mr-10 max-md:space-y-6 space-y-2 items-center justify-center'>
      <p className='text-center pt-20 text-gray-500'>LIVE LIKE top 1%</p>
      <h1 className='text-center text-2xl font-bold text-black'>Experience the campus life</h1>
    <div className='flex flex-row max-md:flex-col space-x-6 mt-10 max-md:space-y-6 justify-center items-center'>
        {campusData.map((data,index)=>(
           <div key={index} className='w-[20%] max-md:w-full'>
            <img className='w-full' src={data.profile} alt="" />
            <p className='font-bold'>{data.heading}</p>
            <p className='text-gray-500'>{data.description}</p>
           </div> 
        ))}
    </div>
    </div>
  )
}

export default Campus
