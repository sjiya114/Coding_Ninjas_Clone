import React from 'react'
import { spotData } from '../assets/assets'
import SpotlightCard from './SpotlightCard'
import youtuve from '../assets/youtuve.png'; 
function Spotlight() {
  return (
    <>
    <div className='ml-[18%] my-20 max-md:ml-6 max-md:mr-6'>
    <h1 className='font-bold text-lg'>Coding Ninjas in spotlight</h1>
    <div className='flex flex-row max-md:flex-col max-md:space-y-6 space-x-4'>
      <div className='w-[36%] max-md:w-full '>
       <a href="https://youtu.be/KnGfIXDNNNk">
        <img className='rounded-lg' src={youtuve} alt="" />
       </a>
      </div>
      <div className='flex flex-row space-x-2 flex-wrap w-[60%]  '>
         {
          spotData.map((data,index)=>(
            <SpotlightCard key={index} desc={data.description} image={data.image}  />
          ))
         }
      </div>
    </div>
    </div>
    </>
  )
}

export default Spotlight
