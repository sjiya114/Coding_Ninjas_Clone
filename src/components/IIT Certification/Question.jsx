import React from 'react'
import { useState } from 'react';
function Question({question,answer}) {
    const [open,setOpen]=useState(false);
  return (
    <div className='mx-10 pb-8 pt-4 border-b-2 border-gray-500 text-gray-500 space-y-2'>
      <div className='flex flex-row justify-between'>
        <h1  className=' text-bold' >{question}</h1>
      <h1 onClick={()=>{setOpen(!open)}} className='text-4xl cursor-pointer text-bold'>{open?'-':'+'}</h1>
      </div>
      {open && <p  className=' font-semibold'  >{answer}</p>}
    </div>
  )
}
export default Question
