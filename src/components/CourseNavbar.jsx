import React from 'react'

function CourseNavbar({image,btn,color}) {
  return (
           <div className='flex flex-row mb-2 fixed top-0 left-0 right-0  justify-between  items-center px-4  bg-white'>
               <img src={image} className='w-46 h-12 my-3' alt="" />
               <button className={`text-white bg-${color} px-4 py-2 rounded-lg `}  >{btn}</button>
           </div>
  )
}

export default CourseNavbar
