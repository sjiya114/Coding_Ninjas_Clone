import React from 'react'
import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function JobCard() {
    const nav=useNavigate();
  return (
    <div className='mx-4 flex mt-40 w-fit bg-white flex-col space-y-6 absolute bottom-0 right-0 left-0'>
            <div className='flex flex-row space-x-4'>
               <MoveLeft onClick={()=>(nav("/nav"))}  />
              <p className='text-gray-500'>For graduates</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src='https://files.codingninjas.com/layer-1-1734090969.svg' alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Full Stack Web Development With GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
             <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.com/data-analytics-1-1734090968.svg" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Data Analytics with GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
          </div>
  )
}

export default JobCard
