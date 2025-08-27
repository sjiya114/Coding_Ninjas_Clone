import React from 'react'
import { facultyData } from '../assets/assets'
import FacultyCard from './FacultyCard'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Mousewheel} from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination"

function Faculty() {
  return (
    <div className='mx-[18%]'>
     <h1 className='font-bold text-lg text-center my-20'>Faculty that brings out the best in you</h1>    
      <Swiper mousewheel={true} pagination={{type:"progressbar"}}  breakpoints={{
        0: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1040:{slidesPerView:3}
      }}   spaceBetween={20} modules={[Pagination,Mousewheel]} >
        {facultyData.map((data)=>(
           <SwiperSlide>
          <FacultyCard images={data.images} linkedin={data.linkedin} name={data.name} profile={data.profile} skill1={data.skill1} skill2={data.skill2} skill3={data.skill3} username={data.username} work={data.work}      />
           </SwiperSlide>
        ))} 
      </Swiper>  
    </div>
  )
}

export default Faculty
