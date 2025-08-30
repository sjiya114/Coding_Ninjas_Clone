import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { assets } from '../assets/assets';
import { Menu,ChevronUp,ChevronRight,GraduationCap,FileBadge,X,Sparkles,MoveLeft,MoveRight } from 'lucide-react';
import image from '../assets/image.svg'
function NavComp() {
     const [hidden,setHidden]=useState(true);
        const [hidden1,setHidden1]=useState(true);
        const [hidden2,setHidden2]=useState(true);
        const [hidden3,setHidden3]=useState(true);
        const [state,setState]=useState(true);
        const nav=useNavigate();
  return (
   <>
       <div className='fixed top-0 left-0 bottom-0 right-0 bg-white'>
            <div className='flex flex-row justify-between'>
            <img src={image} className='top-0  fixed left-0 right-0 mt-6 ml-6' alt="" />
            <X  onClick={()=>{nav("/")}} className='right-0 top-0 fixed mt-5 mr-6'  />
           </div>
           <div className='mt-20 mx-4 flex flex-col space-y-8'>
              <div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row space-x-4'>
                     <GraduationCap/>
                    <span className='font-semibold'>Job Bootcamp</span>
                    </div>
                    <ChevronUp onClick={()=>{setHidden1(!hidden1)}} />
                    
                </div>
                {hidden1 && <div className='flex flex-col mt-4 space-y-2 text-blue-600'>
                    <a href="/bootcamp/0"><span>Full Stack Web Development with Gen AI</span></a>
                    <a href="/bootcamp/1"><span>Data Analytics with GenAI</span></a>
                </div>}
             </div>
               <div >
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row space-x-4'>
                     <FileBadge/>
                     <span className='font-semibold'>IIT Certifications</span>
                    </div>
                     <ChevronUp onClick={()=>{setHidden2(!hidden2)}}/>
                </div>
                {hidden2 && <div className='flex flex-col space-y-2 mt-4  text-blue-600'>
                    <div className='flex flex-row justify-between'>
                       <span>For graduates</span>
                       <ChevronRight  onClick={()=>{nav("/grads")}} />
                    </div>
                    <div  className='flex flex-row justify-between'>
                       <span>For College Students</span>
                       <ChevronRight  onClick={()=>{nav("/clg")}}  />
                    </div>
                    
                    
                </div>}
             </div>
               <div >
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row space-x-4' >
                    <Sparkles/>
                    <span className='font-semibold'>New Launches</span>
                    </div>
                      <ChevronUp onClick={()=>{setHidden3(!hidden3)}}/>
                </div>
                {hidden3 && <div className='flex flex-col space-y-2 mt-4  text-blue-600'>
                    <a href="/newlaunch/0"><span   >Advanced Certification in GenAI and Multi Agent Systems</span></a>
                   <a href="/newlaunch/1"> <span>Advanced Certification in GenAI for Non-tech Professionals</span></a>
                </div>}
             </div>
           </div>
            
          </div>
       </>   
  )
}

export default NavComp
