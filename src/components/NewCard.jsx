import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MoveLeft } from 'lucide-react';
function NewCard({showCard3,setShowCard3}) {
    const nav=useNavigate();
  return (
     <div onMouseLeave={() => setShowCard3(false)} className='mx-4 flex ml-140 bg-white rounded-lg px-4 pb-8 pt-2 w-fit flex-col absolute space-y-6 '>
            <div className='flex flex-row space-x-4'>
              <p className='text-gray-500'>For graduates</p>
            </div>
           <a href='/newlaunch/0'> <div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src='https://files.codingninjas.in/frame-2087323878-1749044071.svg' alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Advanced Certification in  GenAI and multiagent systems</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
            </a>
             <a href='/newlaunch/1'> <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.in/capa_1-2-1754663049.webp" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Advanced Certification in  GenAI for Non-tech professionals</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
            </a>
             <a href='/newlaunch/2'><div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.in/component-10-1755758974.svg" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Advanced Certification in Data Analytics with GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
            </a>
          </div>
  )
}

export default NewCard
