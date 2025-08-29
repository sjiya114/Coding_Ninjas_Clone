import React from 'react'
import { cdata, clg, gdata, grad } from '../assets/assets'
import Bootcamp from '../components/Bootcamp'
import CCard from '../components/CCard'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Mousewheel} from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination"

function Offer() {
  return (
    <div>
        <div className='flex justify-center items-center my-20'>
          <h1 className='text-gray-300 font-bold max-md:text-6xl max-md:text-center  text-8xl  '  >OUR OFFERINGS</h1>
        </div>
     <div  className='flex flex-col space-y-10 ml-[18%] max-md:ml-0 max-md:mx-4 my-20'>
        <div className='flex flex-row space-x-6'>
            <h1 className='font-semibold text-lg max-md:ml-6'>Job Bootcamps</h1>
            <button className='bg-gray-300 font-semibold rounded-r-full px-2 py-1' >For graduates</button>
        </div>
        {/* bootcamp */}
        <div className='flex flex-row flex-wrap max-md:flex-col  space-y-4  space-x-6 max-md:space-x-0'>
         {cdata.map((data,index)=>(
           <a href={`/bootcamp/${index}`} className='cursor-pointer'> <Bootcamp key={index}  icon={data.icon} heading={data.heading} candidate={data.candidate} time={data.time} problem={data.problem}   /></a>
         ))}
        </div>
     </div>
     <div  className='flex flex-col space-y-10 ml-[18%] max-md:ml-6 max-md:mr-6 my-20'>
        <div  className='flex flex-col space-y-4'>
        <h1 className='font-semibold text-lg'>IIT Certifications</h1>
        <button className='bg-yellow-900 w-fit font-semibold rounded-full text-white px-2 py-1' >For graduates</button>
        </div>
         {/* <div className='flex flex-row max-md:hidden space-x-6'>
           {grad.map((grad,index)=>(
           <a href={`/iit/${index}`} className='cursor-pointer'> <CCard  college={grad.college} grp={grad.grp} duration={grad.duration} heading={grad.heading} profile={grad.profile} icon={grad.icon}    /></a>
           ))}
         </div> */}
          <Swiper  className="block md:hidden w-full" mousewheel={true}  breakpoints={{
    320: {   // mobile
      slidesPerView: 1,
    },
    640: {   // tablets
      slidesPerView: 2,
    },
    1200:
    {
      slidesPerView:3
    }
  }}  spaceBetween=
      {10} modules={[Mousewheel,Pagination]} >
         
            {grad.map((grad,index)=>(
              <SwiperSlide>
           <a href={`/iit/${index}`} className='cursor-pointer'> <CCard  college={grad.college} grp={grad.grp} duration={grad.duration} heading={grad.heading} profile={grad.profile} icon={grad.icon}    /></a>
           </SwiperSlide>
           ))}
         
      </Swiper>
        {/* certification for graduates */}
     </div>
     <div  className='flex flex-col space-y-10 ml-[18%] max-md:ml-6 max-md:mr-6 my-20'>
         <div  className='flex flex-row space-x-6'>
        <button className='bg-yellow-900 font-semibold rounded-full text-white px-2 py-1' >For college students</button>
        </div>
        {/* certification for college students */}
        {/* <div className='flex flex-row max-md:hidden space-x-6'>
           {clg.map((grad,index)=>(
          <a href={`/internship/${index}`} className='cursor-pointer'>  <CCard  college={grad.college} grp={grad.grp} duration={grad.duration} heading={grad.heading} profile={grad.profile} icon={grad.icon}    /></a>
           ))}
         </div> */}
           <Swiper
           className="block  w-full"
            breakpoints={{
    320: {   // mobile
      slidesPerView: 1,
    },
    640: {   // tablets
      slidesPerView: 2,
    },
    1200:
    {
      slidesPerView:3
    }
  }}
            mousewheel={true}  spaceBetween=
      {20} modules={[Mousewheel,Pagination]} >
       
            {clg.map((grad,index)=>(
                <SwiperSlide>
          <a href={`/internship/${index}`} className='cursor-pointer'>  <CCard  college={grad.college} grp={grad.grp} duration={grad.duration} heading={grad.heading} profile={grad.profile} icon={grad.icon}    /></a>
             </SwiperSlide>
           ))}
        
      </Swiper>
     </div>
     <div className='flex flex-col  space-y-10 ml-[18%] max-md:ml-0 max-md:mx-4 my-20'>
        {/* new launches */}
         <div className='flex flex-row space-x-6 max-md:ml-6'>
            <h1 className='font-semibold text-lg'>New Launches</h1>
            <button className='bg-gray-300 font-semibold rounded-r-full px-2 py-1' >For graduates</button>
        </div>
        <div className='flex flex-row flex-wrap max-md:flex-col space-y-4 space-x-6 max-md:space-x-0'>
         {gdata.map((data,index)=>(
           <a href={`/newlaunch/${index}`} className='cursor-pointer'> <Bootcamp key={index}  icon={data.icon} heading={data.heading} candidate={data.candidate} time={data.time} problem={data.problem}   /></a>
         ))}
        </div>
     </div>

    </div>
  )
}

export default Offer
