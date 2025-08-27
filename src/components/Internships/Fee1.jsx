import React from 'react'

function Fee1() {
  return (
    <div className='bg-white py-10'>
       <div className='max-w-screen-xl mx-auto'>
       <p className='font-bold text-3xl text-center'>Join Now <span className='text-indigo-600'>Limited</span>  Seats Left</p>
      <div className='flex flex-row my-16  space-x-10'>
        <div>
          <button  className='text-white font-bold bg-indigo-500 rounded-md px-2 py-2 w-60 h-20'>Total Program Fee
₹19,999</button>
        </div>
        <div className='flex flex-col  space-y-4' >
           <p>This certification course can be availed in 3 different programming languages.</p>
           <div className='flex flex-row  justify-between'>
            <div className='flex flex-col space-y-2' >
              <p className='font-bold'>Java</p>
              <p>English</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <p className='font-bold'>C++</p>
              <p>Hinglish</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <p className='font-bold'>Python</p>
              <p>English</p>
            </div>
           </div>
             <button className='text-white bg-indigo-800 px-4 py-2 w-fit h-fit rounded-lg'>Enroll Now</button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Fee1
