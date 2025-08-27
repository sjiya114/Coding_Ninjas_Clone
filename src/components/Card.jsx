import React from 'react'

function Card({title,para1,para2,image}) {
  return (
    <>
    <div className='flex flex-col w-70 rounded-lg shadow-2xl shadow-gray-500'>
    <img src={image} className='w-full h-50' alt="" />
    <div className='flex flex-col w-full px-2 py-4 space-y-1'>
      <h1 className='font-bold'>{title}</h1>
      <p className='font-normal text-sm'>{para1}</p>
      <p className='font-normal text-sm'>{para2}</p>
    </div>
    </div>
    </>
  )
}

export default Card
