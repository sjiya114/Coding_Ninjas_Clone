import React from 'react'
import { coreData } from '../../assets/assets'

function Instructor({category}) {
  return (
    <div  className='bg-gray-50 flex mt-20 flex-col space-y-2 items-center justify-center'>
          <h1 className='text-center text-2xl font-bold text-black'>Meet your course instructors</h1>
        <div className='flex flex-row space-x-6 mt-10'>
            {coreData.map((data)=>(data.cat===category &&
               <div className='border-2 w-[40%] border-gray-300 rounded-lg px-4 py-4  flex flex-col space-y-2'>
                <img className='w-20 h-20' src={data.profile} alt="" />
                <p className='font-bold'>{data.name}</p>
                <p className='text-gray-500 pb-2'>{data.detail}</p>
                <div className='flex flex-col space-y-2s border-t-2 pt-2 border-gray-300'>
                    <p>WORKED AT</p>
                    <img className='w-20 h-20' src={data.company} alt="" />
                </div>
               </div> 
               
            ))}
        </div>
        </div>
  )
}

export default Instructor
