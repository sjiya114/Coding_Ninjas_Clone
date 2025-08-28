import React from 'react'

function InternPhone() {
  return (
     <div>
       <div className='border-white mt-8 rounded-4xl mx-12  w-[60%] max-md:w-full h-fit border-1 shadow-md  shadow-spread-equal shadow-white'>
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
                  <select className='border-1   py-1 px-1 border-gray-500 rounded-lg'   name="Experience" id="">
                    <option value="Experience" disabled>Experience</option>
                    <option value="College Student-1st Year">College Student-1st Year</option>
                    <option value="College Student-2nd Year">College Student-2nd Year</option>
                    <option value="College Student-3rd Year">College Student-3rd Year</option>
                    <option value="College Student-4th Year/Final Year">College Student-4th Year/Final Year</option>
                    <option value="Graduate/Working Professional">Graduate/Working Professional</option>
                  </select>
                <button className='text-white rounded-lg w-full font-bold py-3  bg-orange-600'>Continue Booking Webinar</button>
                <p className='text-xs  text-gray-600'>I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to Privacy Policy & Terms of use</p>
            </form>
        </div>
        </div>
           
        
    </div>
  )
}

export default InternPhone
