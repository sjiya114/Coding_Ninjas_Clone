import React from 'react'
import { alumini } from '../assets/assets'
import MarqueCard from './MarqueCard'
import Marquee from 'react-fast-marquee'

function Marque() {
  return (
    <>
    <h1 className='font-bold text-lg text-center mt-30 mb-12'>Our Ninjas at top tech companies</h1>
    <div className='flex flex-row space-x-6 mb-40 mx-[18%]'>
      <Marquee pauseOnHover >
      {alumini.map((data,index)=>(
        <MarqueCard key={index}  company={data.company} profile={data.profile} desc={data.desc}  />
      ))}
      </Marquee>
    </div>
    </>
  )
}

export default Marque
