import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { assets } from '../assets/assets';
import { Menu,ChevronUp,ChevronRight,GraduationCap,FileBadge,X,Sparkles,MoveLeft,MoveRight } from 'lucide-react';
import image from '../assets/image.svg'
import JobCard from './JobCard';
import IITCard from './IITCard';
import NewCard from './NewCard';
function Navbar() {
const nav=useNavigate();
 const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
    return (
        <>
        <div className='flex flex-row overflow-hidden max-md:hidden  fixed top-0 left-0 right-0  justify-between  items-center px-40 max-lg:px-4 py-4  bg-white'>
            <img src={assets.image} alt="" />
            <div onMouseEnter={() => setShowCard1(true)} className='flex flex-row space-x-8 max-lg:hidden'>
               <div
         className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold"  >Job BootCamp</NavLink>
                <FaChevronDown className='mt-1'  />
                
            </div>
            <div  onMouseEnter={() => setShowCard2(true)}
         className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold">IIT Certifications</NavLink>
                <FaChevronDown className='mt-1'   />
               
            </div>
            <div  onMouseEnter={() => setShowCard3(true)}
        className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold"> New Launches </NavLink>
                <FaChevronDown className='mt-1'     />
                 
            </div>
            </div>
            {/* <button>My Classroom</button> */}
            <button className='text-white bg-orange-600 px-4 py-2 rounded-lg '  >Login</button>
        </div>
         <div className='flex flex-row  md:hidden justify-between bg-white'>
                     <img src={image} className='top-0  fixed left-0 right-0 mt-6 ml-6' alt="" />
                     <button className='flex flex-row fixed right-0 top-0 mt-5 mr-6 space-x-2 bg-black rounded-lg px-2 py-2'>
                         <span className='text-white'>Courses</span>
                         <Menu onClick={()=>{nav("/nav")}} color='white'/>
                     </button>
                  </div>
        
          {/* for college students */}
           {showCard1 && <JobCard setShowCard1={setShowCard1} showCard1={showCard1}   />}
            {showCard2 &&  <IITCard setShowCard2={setShowCard2} showCard2={showCard2}    />}
          {showCard3 && <NewCard setShowCard3={setShowCard3} showCard3={showCard3}   />}
        </>
    )
}

export default Navbar
