import React from 'react'
import { assets } from '../assets/assets'
import Views from './Views'
import Phone from './Phone'

function BannerPage() {
  return (
    <div className='w-full mt-20 h-[100vh] flex flex-row bg-no-repeat bg-cover ' style={{backgroundImage:`url(${assets.banner})`}} >
      <div className='flex flex-col h-full justify-evenly w-1/2 items-center '>
      <div className='flex flex-col ml-[36%] w-full space-y-10 '>
        <p className='text-green-400 font-semibold text-xl '  >Restricted by opportunities?</p>
       <h1 className='text-white  font-bold text-5xl   ' >Get the tech career you deserve.Faster.</h1>
      </div>
       <div className='flex flex-col space-y-10'>
        <Views desc1="128% average hike " desc2="via our placement cell"  />
        <Views  desc1="1.5 lac+ learners" desc2=" cracked top tech companies" />
        <Views  desc1="1400+ Alumini in MAANG " desc2="& 103 unicorn startups" />
       </div>
      </div>
      <div className='w-1/2'>
        <Phone/>
      </div>
    </div>
  )
}

export default BannerPage
