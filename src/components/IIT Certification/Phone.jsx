import React from 'react'

function Phone() {
  return (
    <div>
       <div className='border-white mt-8 rounded-4xl  h-fit border-1 shadow-md  shadow-spread-equal shadow-white'>
             <div className='rounded-4xl py-2 px-2 border-6 w-full h-full border-gray-200     bg-gray-200'>
            <form action="" className='bg-white rounded-4xl py-1 flex flex-col space-y-3 my-1  px-6 w-full h-full'>
                <h1 className='text-black font-semibold text-lg pt-2'>Book a free live webinar to know more</h1>
                <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your name here' className='border-1  py-1 px-1 border-gray-500 rounded-lg ' type="text" name="name" id="" />
                </div>
                 <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your email' className='border-1 py-1 px-1 border-gray-500 rounded-lg ' type="text" name='email' />
                </div>
                <div className='flex flex-col space-y-1'>
                <input placeholder='Enter your Phone Number' className='border-1  py-1 px-1 border-gray-500 rounded-lg ' type="text" name='phone' />
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

export default Phone
