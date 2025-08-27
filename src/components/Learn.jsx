import React from 'react'
import Marquee from 'react-fast-marquee';
import mq1 from '../assets/mq1.png';
import mq2 from '../assets/mq2.png';
import mq3 from '../assets/mq3.png';
import mq4 from '../assets/mq4.png';
import mq5 from '../assets/mq5.png';
import mq6 from '../assets/mq6.png';
function Learn() {
  return (
    <div className='flex flex-row ml-[18%] my-40 mr-[18%]'>
       <div className='flex flex-col space-y-2 w-1/2' >
         <h1 className='font-semibold' >Learn By doing</h1>
         <p >Interesting projects to help you standout to recruiters</p>
       </div>
       <div className='w-1/2 flex flex-row '>
         <Marquee direction='up'>
          <img src={mq4} className='w-30 h-30 rounded-lg' alt="" />
          <img src={mq5} className='w-30 h-30  rounded-lg'  alt="" />
          <img src={mq6} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq4} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq5} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq6} className='w-30 h-30  rounded-lg' alt="" /> 
        </Marquee>
         <Marquee direction='down' >
            <img src={mq1} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq2} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq3} className='w-30 h-30  rounded-lg'  alt="" />
          <img src={mq1} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq2} className='w-30 h-30  rounded-lg' alt="" />
          <img src={mq3} className='w-30 h-30  rounded-lg' alt="" />
         </Marquee>
    </div>
    </div>
  )
}

export default Learn
