import React from 'react'
import { spotData } from '../assets/assets'
import SpotlightCard from './SpotlightCard'
import youtuve from '../assets/youtuve.png'; 
function Spotlight() {
  return (
    <>
    <div className='ml-[18%] my-20'>
    <h1 className='font-bold text-lg'>Coding Ninjas in spotlight</h1>
    <div className='flex flex-row space-x-4'>
      <div className='w-[36%] '>
       <a href="https://youtu.be/KnGfIXDNNNk">
        <img className='rounded-lg' src={youtuve} alt="" />
       </a>
      </div>
      <div className='flex flex-row space-x-2 flex-wrap w-[60%] '>
         {
          spotData.map((data)=>(
            <SpotlightCard desc={data.description} image={data.image}  />
          ))
         }
      </div>
    </div>
    </div>
    </>
  )
}

export default Spotlight
