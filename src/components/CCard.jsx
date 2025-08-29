import React from 'react'

function CCard( {profile,icon,heading,college,grp,duration}) {
  return (
    <div className='flex flex-col border-1 w-90 border-gray-200 rounded-lg'>
      <div className='px-6 py-6 '>
         <img className='w-10 h-8 mt-36 rounded-lg absolute ' src={icon} alt="" />
         <img src={profile} className='rounded-lg opacity-75  w-full h-50' alt="" />
      </div>
      <div className='flex px-7 flex-col space-y-2'>
       <div className='flex flex-col space-y-6 py-2'>
         <p className='font-semibold text-lg'>{heading}</p>
         <p className='text-sm font-semibold text-yellow-950'>{college}</p>
       </div>
       <div className='flex flex-row py-4 justify-between'>
        <div className='flex flex-row space-x-2'>
         {grp.map((img,index)=>(
            <img key={index} className='w-8 h-8' src={img} alt="" />
         ))}
        </div>
         <p>{duration}</p>
       </div>
      </div>
    </div>
  )
}

export default CCard
