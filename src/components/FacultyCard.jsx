import React from 'react'

function FacultyCard({  profile,username,name,images,work,skill1,skill2,skill3,linkedin}) {
  return (
    <div className='flex  w-80  rounded-lg  h-140 px-8 py-8   flex-col items-center justify-center space-y-3 shadow-2xl shadow-gray-500'>
       <img src={profile} className='rounded-full w-30 h-30' alt="" />
       <h1 className='font-semibold'>{username}</h1>
       <p>{name}</p>
       <div className='flex flex-row'>
       {images.map((image,index)=>(
        <img src={image} key={index} className='w-10 h-10' alt="" />
       ))}
       </div>
       <div className='flex flex-col items-center justify-center'>
        <span className='text-gray-600'>{work}</span>
        <span>{skill1}</span>
        <span>{skill2}</span>
        <span>{skill3}</span>
       </div>
        <div className='flex flex-row'>
          <a className='text-blue-800 underline' href={linkedin}>LinkedIn Profile</a>
          {/* <img src="" alt="" /> */}
        </div>
    </div>
  )
}

export default FacultyCard
