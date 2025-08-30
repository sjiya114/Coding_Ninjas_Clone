import React from 'react'
import { MoveLeft,X } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Grads() {
    const nav=useNavigate();
  return (
       <div className='mx-4 flex mt-20 flex-col space-y-6 bottom-0 right-0 left-0'>
              <div className='flex flex-row justify-between'>
            <img  src={assets.image} className='top-0 w-10 h-8  fixed left-0 right-0 mt-6 ml-6' alt="" />
            <X  onClick={()=>{nav("/")}} className='right-0 top-0 fixed mt-5 mr-6'  />
           </div>
            <div className='flex flex-row space-x-4'>
               <MoveLeft onClick={()=>(nav("/nav"))}  />
              <p className='text-blue-950'>For graduates</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src={assets.iitg} alt="" />
                <div className='flex flex-col space-y-2'>
                    <p className='text-blue-800'>E&ICT Academy,IIT Guwahati</p>
                    <a href="/iit/0"><p>PG Certification in Data Analytics with GenAI</p></a>
                </div>
            </div>
             <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src={assets.iitm} alt="" />
                <div className='flex flex-col space-y-2'>
                    <p className='text-blue-800'>IITM Pravartak,TIH IIT Madras</p>
                   <a href="/iit/1"> <p>Advanced Certification in GenAI for Non-tech Professionals</p></a>
                </div>
            </div>
          </div>
  )
}

export default Grads
