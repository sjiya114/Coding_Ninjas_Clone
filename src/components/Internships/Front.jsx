import React from 'react'

function Front({first,second,title,img1,img2}) {
  return (
    <div className='flex flex-row max-w-screen-xl mx-auto pt-10 text-white space-x-6 justify-center items-center'>
    <div className='font-bold'>
      <p className='text-xl'>India's first and only</p>
      <p className='text-2xl'> <span>{first}</span> in <span className='text-red-300'>{second} </span>  </p>
      <p className='px-2 py-2 w-fit bg-indigo-500 rounded-full'>by</p>
       <p className='text-2xl'>{title}</p>
       <div>
        <img className='w-60 h-14' src={img1} alt="" />
       </div>
    </div>
    <div>
      <form className='flex flex-col text-black rounded-lg space-y-2 px-10 py-10 mx-2 my-2 bg-white' action="">
        <p className='font-bold text-xl'>Book a FREE Webinar. NOW!</p>
        <p className='text-red-800 text-sm font-bold'>Last few seats left!</p>
        <input type="text" className='px-2 py-2 bg-gray-200 text-gray-600 rounded-md' placeholder='Enter your Name' />
        <input type="text" className='px-2 py-2 bg-gray-200 text-gray-600 rounded-md' placeholder='Enter your email ID' />
        <input type="text" className='px-2 py-2 bg-gray-200 text-gray-600 rounded-md' placeholder='Enter your mobile Number' />
         <select name="Experience" className='px-2 py-2 bg-gray-200 text-gray-600 rounded-md' id="">
          <option value="Experience">Experience</option>
          <option value="Working Professional - Technical Roles">Working Professional - Technical Roles</option>
          <option value="Working Professional - Non Technical">Working Professional - Non Technical</option>
          <option value="College Student - Final Year">College Student - Final Year</option>
          <option value="College Student - 1st to Pre-final Year">College Student - 1st to Pre-final Year</option>
          <option value="Others">Others</option>
         </select>
                  <button className='text-white rounded-lg w-full font-bold py-3  bg-orange-600'>Continue Booking Webinar</button>
                <p className='text-xs  text-gray-600'>I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to <span className='text-red-800'>Privacy Policy & Terms of use</span></p>
      </form>
    </div>
    </div>
  )
}

export default Front
