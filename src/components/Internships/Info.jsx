import React from 'react'

function Info({p1,p2,p3,p4,s1,s2,s3,s4}) {
  return (
    <div className='flex flex-row  bg-gray-100'>
      <div className='flex w-[25%] py-10 flex-col border-r-2 items-center justify-center border-gray-400 space-y-2'>
        <p>PROGRAM START</p>
        <img className='w-10 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/10/clock.png" alt="" />
        <p>{p1}</p>
        <p>{s1}</p>
      </div>
      <div className='flex flex-col py-10 w-[25%]  border-r-2 items-center justify-center border-gray-400  space-y-2'>
        <p>DURATION</p>
        <img className='w-10 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/10/hourglass.png" alt="" />
        <p>{p2}</p>
        <p>{s2}</p>
      </div>
      <div className='flex flex-col py-10 w-[25%]  border-r-2 items-center justify-center border-gray-400  space-y-2'>
        <p>COURSE PAUSE</p>
        <img className='w-10 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/10/education.png" alt="" />
        <p>{p3}</p>
        <p>{s3}</p>
      </div>
      <div className='flex flex-col py-10 w-[25%]  items-center justify-center space-y-2'>
        <p>ELIGIBILITY</p>
        <img className='w-10 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/10/certificate.png" alt="" />
        <p>{p4}</p>
        <p>{s4}</p>
      </div>
    </div>
  )
}

export default Info
