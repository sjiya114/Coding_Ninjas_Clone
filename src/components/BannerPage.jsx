import React from 'react'
import { assets } from '../assets/assets'
import Views from './Views'
import Phone from './Phone'

function BannerPage() {
  return (
    <div className='w-full mt-20 h-[100vh] max-md:h-fit flex flex-row max-md:flex-col bg-no-repeat bg-cover ' style={{backgroundImage:`url(${assets.banner})`}} >
      <div className='flex flex-col h-full justify-evenly w-1/2 max-md:w-full items-center '>
      <div className='flex flex-col ml-[36%] max-md:ml-8 max-md:mt-10 w-full max-md:space-y-4  space-y-10 '>
        <p className='text-green-400 font-semibold text-xl max-md:text-lg '  >Restricted by opportunities?</p>
       <h1 className='text-white  font-bold text-5xl max-md:text-3xl   ' >Get the tech career you deserve.Faster.</h1>
      </div>
      <div className='md:hidden my-4 ml-5 mr-2'>
        <p className='text-gray-500 font-semibold text-sm'>Structured coding courses that get you there faster with confidence</p>
      </div>
       <div className='flex flex-col max-md:hidden   max-md:mt-10 space-y-10'>
        <Views desc1="128% average hike " desc2="via our placement cell"  />
        <Views  desc1="1.5 lac+ learners" desc2=" cracked top tech companies" />
        <Views  desc1="1400+ Alumini in MAANG " desc2="& 103 unicorn startups" />
       </div>
      </div>
      <div className='w-1/2  max-md:w-full max-md:mr-4'>
        <Phone/>
      </div>
    </div>
  )
}

export default BannerPage
