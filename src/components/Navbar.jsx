import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { assets } from '../assets/assets';
function Navbar() {
    return (
        <div className='flex flex-row overflow-hidden  fixed top-0 left-0 right-0  justify-between  items-center px-40 max-lg:px-4 py-4  bg-white'>
            <img src={assets.image} alt="" />
            <div className='flex flex-row space-x-8 max-lg:hidden'>
               <div className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold"  >Job BootCamp</NavLink>
                <FaChevronDown className='mt-1' />
            </div>
            <div className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold">IIT Certifications</NavLink>
                <FaChevronDown className='mt-1' />
            </div>
            <div className='flex flex-row space-x-2'>
                <NavLink className="text-blue-950 font-bold"> New Launches </NavLink>
                <FaChevronDown className='mt-1' />
            </div>
            </div>
            {/* <button>My Classroom</button> */}
            <button className='text-white bg-orange-600 px-4 py-2 rounded-lg '  >Login</button>
        </div>
    )
}

export default Navbar
