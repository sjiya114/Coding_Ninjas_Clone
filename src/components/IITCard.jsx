import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { assets } from '../assets/assets'

function IITCard({showCard2,setShowCard2}) {
    const [category,setCategory]=useState("graduates");
  return (
   <div onMouseLeave={() => setShowCard2(false)} className='flex flex-row w-fit ml-40 rounded-lg px-4 py-2  bg-white absolute space-x-6'>
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
         {category==="graduates" &&<a href="/iit/0"> <div className='flex flex-row space-x-4'>
                        <img className='w-10 h-8' src={assets.iitg} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>E&ICT Academy,IIT Guwahati</p>
                            <p>PG Certification in Data Analytics with GenAI</p>
                        </div>
                    </div></a>}
                     {category==="graduates" && <a  href="/iit/1"><div className='flex flex-row space-x-4'> 
                        <img className='w-10 h-8' src={assets.iitm} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>IITM Pravartak,TIH IIT Madras</p>
                            <p>Advanced Certification in GenAI for Non-tech Professionals</p>
                        </div>
                    </div></a>}

                     {category!=="graduates" && <a href='/internship/0'><div className='flex flex-row space-x-4'> 
                        <img className='w-10 h-8' src={assets.iitm} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>IITM Pravartak,TIH IIT Madras</p>
                            <p>Training and Internship Certification in Advanced DSA</p>
                        </div>
                    </div></a>}
                    {category!=="graduates" && <a href='/internship/1'>
                      <div className='flex flex-row space-x-4'> 
                        <img className='w-10 h-8' src={assets.iitg} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>E&ICT Academy,IIT Guwahati</p>
                            <p>Training and Internship Certification in Data Analytics</p>
                        </div>
                    </div></a>
}
                  { category!=="graduates" &&  <a href='/internship/2'> <div className='flex flex-row space-x-4'> 
                        <img className='w-10 h-8' src={assets.iitm} alt="" />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-blue-800'>IITM Pravartak,TIH IIT Madras</p>
                            <p>Training and Internship Certification in Full Stack Web Development</p>
                        </div>
                    </div></a>
}
    </div>
   </div>
  )
}

export default IITCard
