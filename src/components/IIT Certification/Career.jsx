import React from 'react'
import { assets, xservice } from '../../assets/assets'

function Career() {
  return (
   <div  className='bg-gray-50 flex flex-col items-center justify-center'>
      <p className='text-center pt-20 text-gray-500'>CAREER SERVICES</p>
      <h1 className='text-center text-2xl font-bold text-black'>Helping you become industry ready</h1>
      <div className='flex flex-row max-md:flex-col  space-x-4 space-y-4 mt-20 ml-[18%] max-md:ml-6 max-md:mr-6 flex-wrap'>
        {xservice.map((service,index)=>(
            <div key={index} className='flex border-2 px-4 py-4 border-gray-400 rounded-lg  w-[36%] max-md:w-full h-[200px] flex-col space-y-2'>
                <img className='w-10 h-10' src={service.icon} alt="" />
                <p className='font-bold'>{service.heading}</p>
                <p className='text-gray-600'>{service.description}</p>
            </div>
        ))}
      </div>
      <button className='w-fit border-1 px-2 py-2 border-black rounded-lg mt-10'>View full curriculum</button>
    </div>
  )
}

export default Career
