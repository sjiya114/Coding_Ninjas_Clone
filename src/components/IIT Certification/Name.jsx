import React from 'react'
import bg from '../../assets/bg.png';
export default function Name({name}) {
  return (
    <div className='flex items-center mt-20 mb-20 justify-center bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${bg})`}}>
        <div className='w-[55%] tracking-wider'> 
            <h1 className='text-white mt-30 mb-30   font-bold text-6xl'>{name}</h1>
        </div>
    </div>
  )
}
