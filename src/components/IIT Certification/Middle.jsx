import React from 'react'

function Middle({title,d1,c1,d2,c2,d3,c3,d4,c4}) {
  return (
    <div className='bg-gray-200 flex flex-row space-x-10 items-center justify-center pt-20 pb-20'>
       <div className='flex flex-col w-[36%] space-y-4'>
        <img className='w-60 h-40' src="https://files.codingninjas.in/group-1437252822-1742977916.webp" alt="" />
        <p className='font-bold text-2xl'>Own your place in the future, get certified by {title}</p>
        <button className='font-bold border-2 border-black px-2 py-2 w-fit rounded-lg'>View full curriculum</button>
       </div>
       <div className='flex flex-col space-y-8'>
         <div className='flex flex-row space-x-6 border-b-2 border-gray-600'>
          <img src="https://files.codingninjas.in/frame-2087324264-1741602483.webp" alt="" />
          <div>
            <p className='font-semibold text-lg'>{d1}</p>
            <p className='font-semibold text-gray-500'>{c1}</p>
          </div>
         </div>
          <div className='flex flex-row space-x-6 border-b-2 border-gray-600'>
          <img src="https://files.codingninjas.in/frame-2087324264-1-1741602515.webp" alt="" />
          <div>
             <p className='font-semibold text-lg'>{d2}</p>
            <p className='font-semibold text-gray-500'>{c2}</p>
          </div>
         </div>
          <div className='flex flex-row space-x-6 border-b-2 border-gray-600'>
          <img src="https://files.codingninjas.in/frame-2087324263-1741602759.webp" alt="" />
          <div>
             <p className='font-semibold text-lg'>{d3}</p>
            <p className='font-semibold text-gray-500'>{c3}</p>
          </div>
         </div>
          <div className='flex flex-row space-x-6'>
          <img src="https://files.codingninjas.in/frame-2087324264-1741602483.webp" alt="" />
          <div>
              <p className='font-semibold text-lg'> {d4}</p>
            <p className='font-semibold text-gray-500'>{c4}</p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Middle
