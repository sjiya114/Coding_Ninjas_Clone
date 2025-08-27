import React from 'react'

function Query() {
  return (
     <div className='bg-pink-50'>
      <div className='ml-[18%] flex flex-row pt-20 space-x-10'>
        <div >
            <img className='mt-20' src="https://files.codingninjas.com/frame-1000004411-1706101156.svg" alt="" />
        </div>
        <div className='w-[40%] flex flex-col space-y-4'>
             <p className='text-2xl font-bold text-black'>Have questions?</p>
             <p className='text-2xl font-bold text-black'>Request a call from our counselors.</p>
              <form action="" className=' rounded-4xl py-1 flex flex-col space-y-3 my-1  w-full h-full'>
                <h1 className='text-black font-semibold text-lg pt-2'>Book a free live webinar to know more</h1>
                <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your name here' className='border-1 bg-white  py-1 px-1 border-gray-500 rounded-lg ' type="text" name="name" id="" />
                </div>
                 <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your email' className='border-1 py-1 bg-white px-1 border-gray-500 rounded-lg ' type="text" name='email' />
                </div>
                <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your Phone Number' className='border-1 bg-white  py-1 px-1 border-gray-500 rounded-lg ' type="text" name='phone' />
                </div>
                  <p className='text-gray-600'>Experience</p>
                <div className='flex flex-col space-y-2'>
                  <div className='space-x-2'>
                 <input name='btn1' type="radio" />
                <label htmlFor="btn1">Working Professional - Technical Roles</label>
                </div>
                <div className='space-x-2'>
                 <input name='btn2' type="radio" />
                <label htmlFor="btn2">Working Professional - Non Technical</label>
                </div>
                <div className='space-x-2'>
                 <input name='btn3' type="radio" />
                <label htmlFor="btn3">College Student - Final Year</label>
                </div>
                <div className='space-x-2'>
                 <input name='btn4' type="radio" />
                <label htmlFor="btn4">College Student - 1st to Pre-final Year</label>
                </div>
                 <div className='space-x-2'>
                  <input name='btn5' type="radio" />
                <label htmlFor="btn5">Others</label>
                 </div>
                </div>
                <button className='text-white rounded-lg w-full font-bold py-3  bg-orange-600'>Continue Booking Webinar</button>
                <p className='text-xs  text-gray-600'>I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to Privacy Policy & Terms of use</p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Query
