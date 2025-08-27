import React from 'react'
import { assets } from '../assets/assets'

function Links() {
  return (
    <div className='bg-black text-white'>
      <div className='max-w-screen-xl mx-auto  flex flex-col space-y-4'>
        <h1  className='font-semibold text-lg mt-40'>Important Links</h1>
      <div className='flex flex-row max-md:flex-col '>
        <div>
          <p  className='font-semibold text-sm text-wrap w-40'>Job Bootcamp for professionals</p>
        </div>
        <div className='flex flex-row max-md:flex-col  text-xs font-semibold flex-wrap'>
          <a className='text-gray-300 border-gray-300 pr-4' href="">Web Development Bootcamp (MERN & Springboot)&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className='text-gray-300' href="">Data Analytics Job Bootcamp</a>
        </div>
        
      </div>
      <div className='flex flex-row  max-md:flex-col'>
        <div>
          <p  className='font-semibold text-sm text-wrap w-40 '>IIT Certifications for Professionals</p>
        </div>
        <div className='flex flex-row max-md:flex-col   text-xs font-semibold  flex-wrap'>
           <a className='text-gray-300' href="">PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a className='text-gray-300' href="">PG Certification in Data Science by E&ICT Academy, IIT Guwahati &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a className='text-gray-300' href="">Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras</a>
        </div>
      </div>
      <div className='flex flex-row max-md:flex-col'>
        <div>
         <p  className='font-semibold text-sm text-wrap w-40 '>IIT Certifications for Students</p>
        </div>
        <div className='flex flex-row  max-md:flex-col text-xs font-semibold  flex-wrap'>
          <a className='text-gray-300' href="">Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a className='text-gray-300' href="">Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a>
         <a className='text-gray-300' href="">Training and Internship Certification in Full Stack Web Development with Generative AI + DSA by IITM Pravartak, TIH IIT Madras</a>
        </div>
      </div>
      <div className='flex flex-row max-md:flex-col text-sm'>
        <p  className='font-semibold  text-wrap w-40'>Our New Launches</p>
        <a className='text-gray-300 text-xs font-bold' href="">Advanced Certification in GenAI & Multi Agent Systems</a>
      </div>
      <div className='flex flex-row  max-md:flex-col text-sm '>
        <div>
         <p  className='font-semibold text-wrap w-40'>We accept payments using:</p>
        </div>
        <div className='flex flex-row flex-wrap space-x-12'>
            <div className='flex flex-row flex-wrap  space-x-4'>
          <img src={assets.Visa} className='w-10 h-10 rounded-lg' alt="" />
          <img src={assets.Paypal} className='w-24 h-10  rounded-lg' alt="" />
          <img src={assets.Upi} className='w-20 h-10  rounded-lg' alt="" />
          <img src={assets.emi} className='w-20 h-10  rounded-lg' alt="" />
        </div>
        <div className='flex flex-row  space-x-4'>
          <button className='text-white bg-blue-600  h-10 px-1 py-1 rounded-lg'  >100% safe and secure payment</button>
          <img src={assets.RazorPay} className='w-24 h-10 rounded-lg' alt="" />
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Links
