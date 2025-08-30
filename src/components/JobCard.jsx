import React from 'react'
import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function JobCard({showCard1,setShowCard1}) {
    const nav=useNavigate();
  return (
    <div  onMouseLeave={() => setShowCard1(false)}  className='mx-4 ml-100 rounded-lg px-4 pb-10 pt-4 flex w-fit bg-white flex-col space-y-6 absolute'>
            <div className='flex flex-row space-x-4'>
              <p className='text-gray-500'>For graduates</p>
            </div>
            <a href='/bootcamp/0'><div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src='https://files.codingninjas.com/layer-1-1734090969.svg' alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Full Stack Web Development With GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
            </a>
             <a href='/bootcamp/1'><div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.com/data-analytics-1-1734090968.svg" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Data Analytics with GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div></a>
          </div>
  )
}

export default JobCard
