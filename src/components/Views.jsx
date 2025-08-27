import React from 'react'
import { assets } from '../assets/assets'

function Views({desc1,desc2}) {
  return (
      <div className='text-white w-120 bg-zinc-900 shadow-2xl shadow-black   flex flex-row'>
        <div>
          <img className='w-14 h-14 border-1 border-zinc-800' src={assets.checked} alt="checked" />
        </div>
        <div className='border-1 w-full text-center  pt-2 pb-2 border-zinc-800'>
         <span className='font-bold'>{desc1}</span>
         <span>{desc2}</span>
        </div>
      </div>
  )
}

export default Views
