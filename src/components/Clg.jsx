import React from 'react'
import { assets } from '../assets/assets'
import { MoveLeft,X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Clg() {
    const nav=useNavigate();
  return (
    <div className='mx-4 flex flex-col space-y-6 bottom-0 right-0 left-0'>
          <div className='flex flex-row justify-between'>
            <img src={assets.image} className='top-0  fixed left-0 right-0 mt-6 ml-6' alt="" />
            <X  onClick={()=>{nav("/")}} className='right-0 top-0 fixed mt-5 mr-6'  />
           </div>
            <div className='flex flex-row space-x-4'>
               <MoveLeft  onClick={()=>(nav("/nav"))}/>
              <p  className='text-blue-950'>For college students</p>
            </div>
            <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src={assets.iitm} alt="" />
                <div className='flex flex-col space-y-2'>
                    <p>IITM Pravartak,TIH IIT Madras</p>
                   <a href="/internship/0"> <p>Training and Internship certification in advanced DSA</p></a>
                </div>
            </div>
            <div className='flex flex-row space-x-4'>
                <img className='w-10 h-8' src={assets.iitg} alt="" />
                <div className='flex flex-col space-y-2'>
                    <p>E&ICT Academy,IIT Guwahati</p>
                   <a href="/internship/1"> <p>Training and Internship certification in Data Analytics</p></a>
                </div>
            </div>
             <div className='flex flex-row space-x-4'> 
                <img className='w-10 h-8' src={assets.iitm} alt="" />
                <div className='flex flex-col space-y-2'>
                    <p>IITM Pravartak,TIH IIT Madras</p>
                   <a href="/internship/2"><p>Training and Internship certification in Full Stack Web Development</p></a>
                </div>
            </div>
          </div>
  )
}

export default Clg
