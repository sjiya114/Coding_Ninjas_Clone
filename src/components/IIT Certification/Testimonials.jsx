import React from 'react'
import { testimonialData } from '../../assets/assets'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Mousewheel} from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination"
function Testimonials() {
  return (
    <div  className='bg-gray-50 flex flex-col space-y-2 items-center justify-center'>
         <p className='text-center pt-20 text-gray-500'>TESTIMONIALS</p>
         <h1 className='text-center text-2xl font-bold text-black'>Experience the campus life</h1>
         <div className='w-full mr-[10%] ml-[20%] mt-20'>
        <Swiper className='w-full '   breakpoints={{
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    640: { slidesPerView: 2 },
    940:{ slidesPerView:2}
  }}        spaceBetween={10}  mousewheel={true}  modules={[Pagination,Mousewheel]} >
           {testimonialData.map((data)=>(
            <SwiperSlide >
              <div className='flex flex-col w-[400px] space-y-2 border-1 border-gray-400 rounded-lg'>
               <img className='w-20 h-20' src={data.icon} alt="" />
               <p className='text-gray-500'>{data.review}</p>
               <div className='flex flex-row space-x-2'>
                 <img className='w-16 h-16 rounded-full' src={data.profile} alt="" />
                 <div className='flex flex-col space-y-2'>
                    <p className='font-bold'>{data.username}</p>
                    <img className='w-10 h-10' src={data.company} alt="" />
                 </div>
               </div>
              </div> 
              </SwiperSlide> 
           ))}
           </Swiper>
           </div>
       </div>
  )
}

export default Testimonials
