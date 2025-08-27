import React from 'react'

function Bootcamp({ icon,heading,time, problem, candidate}) {
  return (
    <div className='flex w-120 flex-col border-1 border-gray-200 rounded-lg'>
      <div className='flex bg-blue-100 items-center h-fit justify-center flex-row space-x-4 px-4 py-8'>
        <img className='w-16 h-16 rounded-full' src={icon} alt="" />
        <p className='font-semibold text-xl'>{heading}</p>
      </div>
      <div className='flex flex-row px-4 py-4 space-x-4'>
        <p>{time}</p>
        <p>{problem}</p>
        <p>{candidate}</p>
      </div>
    </div>
  )
}

export default Bootcamp
