import React from 'react'

function MarqueCard({profile,company,desc}) {
  return (
    <div className='flex flex-col py-4 w-40 rounded-lg  items-center justify-center px-4  shadow-2xl shadow-gray-300'>
      <img src={profile} className='w-20 h-20' alt="" />
      <img className='w-20 h-18' src={company} alt="" />
      <p className='font-semibold text-sm text-gray-500'>{desc}</p>
    </div>
  )
}

export default MarqueCard
