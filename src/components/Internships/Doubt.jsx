import React from 'react'

function Doubt() {
  return (
    <div className='flex flex-col max-md:pt-16 max-md:pb-10 bg-white space-y-5'>
      <h1 className='font-bold text-3xl text-center'>Unlimited 1:1 Live <span className='text-indigo-500'> Doubt Resolution</span></h1>
      <div className='flex flex-row max-md:flex-col max-md:space-y-6 max-md:mx-4 max-w-screen-xl mx-auto '>
          <div className='flex flex-col space-y-4'>
           <h1 className='font-bold text-center text-2xl'>Timings</h1>
           <p>Ask unlimited doubts to our expert teaching assistants whenever you are stuck from 10 a.m. to 12 a.m. (midnight), 7 days a week, 365 days a year.</p>
           <div className='flex flex-row space-x-4'>
             <button className='flex px-2 py-2 h-fit rounded-lg border-2 border-blue-600 flex-col'>
                <p className='font-bold'>6</p>
                <p>Expert
Instructors</p>
             </button>
             <button className='flex px-2 py-2 h-fit rounded-lg border-2 border-blue-600 flex-col'>
                <p className='font-bold'>50</p>
                <p>Industry
Mentors</p>
             </button>
             <button className='flex px-2 py-2 h-fit rounded-lg border-2 border-blue-600 flex-col'>
                < p className='font-bold'>1000+</p>
                <p>Teaching
Assistants</p>
             </button>
           </div>
      </div>
      <div className='bg-black w-3/4 max-md:w-full'>
       <video src="https://youtu.be/5vlHbRJAtCc" className='w-100 h-100'></video>
      </div>
      </div>
     
    </div>
  )
}

export default Doubt
