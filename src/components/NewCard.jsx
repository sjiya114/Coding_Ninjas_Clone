import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MoveLeft } from 'lucide-react';
function NewCard() {
    const nav=useNavigate();
  return (
     <div className='mx-4 flex mt-40 bg-white w-fit flex-col absolute space-y-6 bottom-0 right-0 left-0'>
            <div className='flex flex-row space-x-4'>
               <MoveLeft onClick={()=>(nav("/nav"))}  />
              <p className='text-gray-500'>For graduates</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src='https://files.codingninjas.in/frame-2087323878-1749044071.svg' alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Advanced Certification in  GenAI and multiagent systems</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
             <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.in/capa_1-2-1754663049.webp" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Advanced Certification in  GenAI for Non-tech professionals</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
             <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src="https://files.codingninjas.in/component-10-1755758974.svg" alt="" />
                <div className='flex flex-col space-y-2'>
                    <p >Adavanced Certification in Data Analytics with GenAI</p>
                    <p className='text-blue-800'>Certified by coding ninjas</p>
                </div>
            </div>
          </div>
  )
}

export default NewCard
