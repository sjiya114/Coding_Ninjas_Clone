import React from 'react'

function SpotlightCard({image,desc}) {
  return (
    <div className='flex flex-col text-sm px-2 py-2  w-50 h-36 rounded-2xl bg-white border-gray-700 border-2'>
      <img className='w-30 h-16' src={image} alt="" />
      <p>{desc}</p>
    </div>
  )
}

export default SpotlightCard
