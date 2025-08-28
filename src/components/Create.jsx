import React from 'react'
import icon from '../assets/midicon.svg';
import premium from '../assets/premium.svg'
import fire from '../assets/fire.svg';
import Marquee from 'react-fast-marquee'
import hackathon from '../assets/hackathon.png';
import partner from '../assets/partner.svg';
import { insightData } from '../assets/assets';
function Create({dir}) {
  return (
    <div className='ml-[18%] max-md:ml-6 max-md:mr-6 flex flex-col mt-10 space-y-10'>
      <h1 className={`font-bold text-lg text-${dir} `}>Your one stop destination to code, create & connect</h1>
      <div className='border-gray-500 border-2 w-fit rounded-lg bg-white'>
      <div className='bg-purple-200 flex flex-col space-y-2 mx-2 my-2 px-2 py-2 rounded-lg w-fit'>
        <img className='w-20 h-20' src={icon} alt="" />
        <h1 className='font-semibold'>Unlock learning, career opportunities & success from X to 10X</h1>
        <div className='flex flex-row space-x-4 font-bold text-yellow-900'>
          <button className='border-2 bg-white border-white rounded-lg px-1 py-1'>Industry Expert Session</button>
          <button className='border-2 bg-white border-white rounded-lg px-1 py-1'>Fireside Chat</button>
          <button className='border-2 bg-white border-white rounded-lg px-1 py-1'>Tech Talk</button>
        </div>
      </div>
       </div>
        <div className='border-gray-500 w-[50%] max-md:w-full rounded-lg bg-white'>
      <div className='flex flex-row max-md:flex-col space-x-6 rounded-lg bg-gray-200 mx-2 my-2'>
         <div className='w-[40%] max-md:w-full flex flex-col rounded-lg px-2 items-center justify-center' >
           <img className='w-16 h-16' src={premium} alt="" />
           <h1 className='font-bold'>Learn from CXOs, founders & more</h1>
           <p className='text-gray-500'>Exclusive Insights from industry leaders</p>
         </div>
         <div className='w-[60%] max-md:w-full'>
           <Marquee>
             {insightData.map((data)=>(<div className='shadow-2xl flex flex-col items-center justify-center w-40 h-60 bg-white shadow-gray-300 rounded-lg'>
              <img className='w-20 h-20 rounded-full' src={data.profile} alt="" />
              <img className='w-20 h-20' src={data.company} alt="" />
              <p className='text-sm text-gray-500'>{data.desc}</p>
             </div>))}
           </Marquee>
         </div>
      </div>
      </div>
       <div className='border-gray-500 border-2 w-fit rounded-lg bg-white'>
      <div className='mx-2 my-2'>
         <button className=' flex flex-row space-x-2 bg-white  px-1 rounded-lg  py-1 mt-4 ml-2 absolute'>
          <img className='w-6 h-6' src={fire} alt="" />
          <span>Hackathons</span>
        </button>
        <img className='w-100 h-70 rounded-2xl' src={hackathon} alt="" />
      </div>
       </div>
      <div className='flex flex-row space-x-4'>
         <div className='border-gray-500 border-2 w-fit rounded-lg bg-white'>
        <div className='flex flex-col bg-gray-100 w-fit px-2 py-2 rounded-lg mx-2 my-2 space-y-2'>
          <h1 className='font-bold'>Hands On workshop</h1>
          <p className='text-gray-400'>Learn latest tools,make open source contribution and more!</p>
        </div>
        </div>
         <div className='border-gray-500 border-2 w-fit rounded-lg bg-white'>
        <div className='flex flex-col bg-gray-300 w-fit px-2 py-2 mx-2 my-2 rounded-lg space-y-2'>
          <img className='w-6 h-6' src={partner} alt="" />
          <p className='font-semibold'>Partner events from cluns with IITs,IIMs</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Create
