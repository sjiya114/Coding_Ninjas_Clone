import React from 'react'

function Front({ name, heading,desc1,desc2,desc3,btn1,btn2,btn3 }) {
    return (
        <div className='w-full mt-10'>
            <p className='text-gray-500'>{name}&nbsp;|&nbsp;Coding Ninjas </p>
            <h1 className='text-2xl font-bold'>{heading}</h1>
            < div className='flex mt-6 flex-row space-x-4 border-b-1 pb-10 border-gray-500'>
                <button className='bg-white rounded-lg text-gray-600 px-2 py-1'>
                   {btn1}
                </button>
                <button className='bg-white rounded-lg text-gray-600 px-2 py-1'>
                     {btn2}
                </button>
                <button className='bg-white rounded-lg text-gray-600 px-2 py-1'>
                     {btn3}
                </button>
            </div>
            <div className='flex flex-col space-y-4 mt-10'>
                <div className='flex flex-row space-x-2'>
                    <img src="https://files.codingninjas.in/frame-1-1741890548.svg" alt="" />
                    <p  className='text-gray-500'>{desc1}</p>
                </div>
                <div className='flex flex-row space-x-2' >
                    <img src="https://files.codingninjas.in/frame-2-1741890548.svg" alt="" />
                    <p  className='text-gray-500'>{desc2}</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <img src="https://files.codingninjas.in/frame-1741890548.svg" alt="" />
                    <p  className='text-gray-500'>{desc3}</p>
                </div>
            </div>
        </div>
    )
}

export default Front
