import React from 'react'

function Front({title,desc,btn1,btn2,btn3,btn4,p1,p2,p3,p4,s1,s2,s3,s4}) {
  return (
    <div className='flex flex-col max-md:ml-10 space-y-6 '>
      
        <img className='w-40 h-10 ' src="https://files.codingninjas.com/fir-professional-tag-.webp" alt="" />
       <p className='text-white text-3xl'>{title}</p>
       <p className='text-gray-500 text-lg'>{desc}</p>
        <div className='flex flex-col space-y-6'> 
            <div className='flex flex-row max-md:flex-col max-md:space-y-2 space-y-4 space-x-6 flex-wrap'>
                <button className='bg-gray-500 flex rounded-lg px-2 py-2 flex-row space-x-2'>
                <img src="https://files.codingninjas.com/live-one-one-doubt-support-34352.svg" alt="" />
                <span>{btn1}</span>
            </button>
            <button className='bg-gray-500 flex  rounded-lg px-2 py-2 flex-row space-x-2'>
                 <img src="https://files.codingninjas.in/future-ready-curriculam-1720990542.svg" alt="" />
                <span>{btn2}</span>
            </button>
            <button className='bg-gray-500 flex   rounded-lg px-2 py-2 flex-row space-x-2'>
                 <img src="https://files.codingninjas.com/placement-assistance-34353.svg" alt="" />
                <span>{btn3}</span>
            </button>
            <button className='bg-gray-500  rounded-lg px-2 py-2 flex flex-row space-x-2'>
                 <img src="https://files.codingninjas.com/stanford-iit-maang-faculty-34354.svg" alt="" />
                <span>{btn4}</span>
            </button>
            </div>
           
            <div className='flex flex-row max-md:flex-col max-md:space-y-4 space-x-4 px-6 py-4 max-md:space-x-0 max-md:px-1 max-md:py-0  rounded-2xl text-white'>
                <div className='flex flex-col bg-gray-500 max-md:flex-row  rounded-lg max-md:space-x-2 space-y-2 border-r-2 px-2 py-2 border-gray-700'>
                    <p>{p1}</p>
                    <span>{s1}</span>
                </div>
                <div className='flex flex-col max-md:flex-row bg-gray-500 rounded-lg max-md:space-x-2 space-y-2 px-2 py-2 border-r-2 border-gray-700'>
                    <p>{p2}</p>
                    <span>{s2}</span>
                </div>
                <div className='flex flex-col max-md:flex-row bg-gray-500  rounded-lg max-md:space-x-2 space-y-2 px-2 py-2 border-r-2 border-gray-700'>
                    <p>{p3}</p>
                    <span>{s3}</span>
                </div>
                <div className='flex flex-col max-md:flex-row bg-gray-500  rounded-lg max-md:space-x-2 px-2 py-2 space-y-2'>
                    <p>{p4}</p>
                    <span>{s4}</span>
                </div>
            </div>
             <div className='flex flex-row space-x-2'>
                <p className='text-gray-200 '>Know in-depth details in our free webinar</p>
                <img className='w-10 h-10' src="https://files.codingninjas.in/hand_04-34708.webp" alt="" />
             </div>
        </div>
    </div>
  )
}

export default Front
