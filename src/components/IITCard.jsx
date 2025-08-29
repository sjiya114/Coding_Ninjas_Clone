import React from 'react'
import { ChevronRight } from 'lucide-react'
import { assets } from '../assets/assets'

function IITCard() {
  return (
   <div className='flex flex-row w-fit  mt-40 bg-white absolute space-x-6'>
    <div className='flex flex-col space-y-6'>
        <h1>Category</h1>
        <ul className='flex flex-col space-y-4' >
            <li className='flex flex-row space-x-5'>
                <p>For Graduates</p>
                <ChevronRight/>
            </li>
            <li className='flex flex-row space-x-5'>
                <p>For College Students</p>
                <ChevronRight/>
            </li>
        </ul>
    </div>
    <div className='flex flex-row space-x-8'>
          <div className='flex flex-row space-x-4'>
                        <img className='w-10 h-8' src={assets.iitg} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>E&ICT Academy,IIT Guwahati</p>
                            <p>PG Certification in Data Analytics with GenAI</p>
                        </div>
                    </div>
                     <div className='flex flex-row space-x-4'> 
                        <img className='w-10 h-8' src={assets.iitm} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>IITM Pravartak,TIH IIT Madras</p>
                            <p>Advanced Certification in GenAI for Non-tech Professionals</p>
                        </div>
                    </div>
    </div>
   </div>
  )
}

export default IITCard
