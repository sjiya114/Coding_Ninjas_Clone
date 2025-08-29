import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Mousewheel} from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination"
import { assets, xdata } from '../assets/assets';


function Story() {
  return (
    <div className=' bg-black'>
    <div className='ml-[18%] mr-[18%] max-md:ml-6 max-md:mr-6 flex flex-col space-y-20'>
       <div className=' flex flex-row mt-20 justify-between  '>
      <h1 className='text-white font-semibold text-lg'>Stories from people like you</h1>
      <h1 className='text-orange-600 font-semibold'>Read All success stories</h1>
    </div>
    <div>
    <Swiper mousewheel={true}  slidesPerView={4} spaceBetween={6} modules={[Mousewheel]} className='md:hidden text-white'>
      <SwiperSlide>
         <button className='rounded-xl bg-gray-500 px-1 py-1'>Non tech to tech</button>
      </SwiperSlide>
      <SwiperSlide>
         <button className='rounded-xl bg-gray-500 px-1 py-1'>Service to product</button>
      </SwiperSlide>
      <SwiperSlide>
         <button className='rounded-xl bg-gray-500 px-1 py-1'>Tier 2/3 colleges</button>
      </SwiperSlide>
      <SwiperSlide>
         <button className='rounded-xl bg-gray-500 px-1 py-1'>Job Bootcamp</button>
      </SwiperSlide>
      <SwiperSlide>
         <button className='rounded-xl bg-gray-500 px-1 py-1'>Upskilling Courses</button>
      </SwiperSlide>
    </Swiper>
     </div>
    {/* <div className='text-white max-md:hidden flex flex-row space-x-4 items-center justify-center'>
        <button className='rounded-xl bg-gray-500 px-1 py-1'>Non tech to tech</button>
        <button className='rounded-xl bg-gray-500 px-1 py-1'>Service to product</button>
        <button className='rounded-xl bg-gray-500 px-1 py-1'>Tier 2/3 colleges</button>
        <button className='rounded-xl bg-gray-500 px-1 py-1'>Job Bootcamp</button>
        <button className='rounded-xl bg-gray-500 px-1 py-1'>Upskilling Courses</button>
    </div> */}
     <div>
        <Swiper       breakpoints={{
    320: {   // mobile
      slidesPerView: 1,
    },
    640: {   // tablets
      slidesPerView: 2,
    },
    1024: {  // laptops
      slidesPerView: 3,
    },
    1280: {  // desktops
      slidesPerView: 3,
    },
  }} mousewheel={true} pagination={{type:"progressbar"}} spaceBetween={20} modules={[Pagination,Mousewheel]} >
           {xdata.map((data)=>(
           <SwiperSlide >
             <div className='bg-black flex flex-col w-80 space-y-2 px-2 rounded-lg py-4 items-center justify-center'>
                <img src={data.profile} className='w-30 h-30 rounded-full' alt="" />
                <h1 className='text-gray-600 font-bold'>{data.name}</h1>
                <p className='text-gray-500'>{data.job}</p>
                <p className='text-white'>{data.desc}</p>
                <div className='flex flex-row space-x-4'>
                  <h1 className='text-sm text-white'>Post coding ninjas</h1>
                  <img className='w-6 h-6' src="https://files.codingninjas.com/union-1707118075.svg" alt="" />
                  <img className='w-10 h-10' src={data.company} alt="img" />
                </div>
             </div>
           </SwiperSlide>
        ))} 
        </Swiper>
     </div>
     <div className='flex items-center justify-center mb-20'>
        <button className='flex bg-orange-600 px-2 py-2 rounded-lg flex-row space-x-4'>
            <span className='text-white'>Explore offerings</span>
            <img src="https://files.codingninjas.com/arrow-double-down-32073.svg" alt="" />
        </button>
     </div>
     <div>
      <div className='text-white pb-40'>
         <div className='flex flex-col space-y-6 items-center justify-center'>
           <h1 className='font-bold text-xl text-white'>Trusted by learners</h1>
          <p>100000+ Coding Ninjas alumini from 1100+ companies & 4400+ colleges working in top product companies</p>
          <div className='flex flex-row max-md:flex-col max-md:space-y-8 space-x-10'>
            <div className='flex flex-row space-x-2'>
              <img className='w-10 h-10' src={assets.facebook} alt="" />
              <div className='flex flex-col'>
               <p>4.9*</p>
               <p>700+ reviews</p>
              </div>
            </div>
            <div className='flex flex-row space-x-2'>
              <img  className='w-10 h-10'  src={assets.google} alt="" />
               <div  className='flex flex-col'>
               <p>4.7*</p>
               <p>2300+ reviews</p>
              </div>
              
            </div>
            <div className='flex flex-row space-x-2'>
              <img  className='w-10 h-10'  src={assets.icon} alt="" />
               <div  className='flex flex-col'> 
               <p>4.8*</p>
               <p>Course rating</p>
              </div>
            </div>
          </div>
         </div>
      </div>
     </div>




    </div>
    </div>
  )
}

export default Story
