import React from 'react'

function World({data}) {
  return (
    <div className='max-w-screen-xl my-20 mx-auto flex flex-row max-md:flex-col justify-between'>
     <div className='flex w-[20%] max-md:w-full flex-col px-2 py-2'>
      <img src="https://files.codingninjas.com/group-1437253621-1754553693.webp" alt="" />
        <h1 className='font-semibold'>{data[0].heading1}</h1>
      <p className='text-gray-600'>{data[0].description1}</p>
    </div>
    <div className='flex w-[20%] flex-col max-md:w-full  px-2 py-2'>
    
      <img src="https://files.codingninjas.com/group-1437253622-1754553694.webp" alt="" />
       <h1 className='font-semibold'>{data[1].heading2}</h1>
      <p className='text-gray-600'>{data[1].description2}</p>
    </div>
    <div className='flex w-[20%] flex-col max-md:w-full  px-2 py-2'>
    
      <img src="https://files.codingninjas.com/group-1437253623-1754553695.webp" alt="" />
       <h1 className='font-semibold'>{data[2].heading3}</h1>
      <p className='text-gray-600'>{data[2].description3}</p>
    </div>
    <div className='flex w-[20%] flex-col max-md:w-full  px-2 py-2'>
   
      <img src="https://files.codingninjas.com/group-1437253624-1754553695.webp" alt="" />
        <h1 className='font-semibold'>{data[3].heading4}</h1>
      <p className='text-gray-600'>{data[3].description4}</p>
    </div>
    </div>
  )
}

export default World
