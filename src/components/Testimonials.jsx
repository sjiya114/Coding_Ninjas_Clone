import React from 'react'
import { testimonialData } from '../assets/assets'
import ReviewCard from './ReviewCard'

function Testimonials() {
  return (
    <div>
       <h1>TESTIMONIALS</h1>
       <p>Hear what our students have to say</p>
       <div className='max-md:flex-col max-md:space-y-6'>
        {testimonialData.map((data)=>(
            <ReviewCard username={data.username} review={data.review} profile={data.profile} icon={data.icon} company={data.company}   />
        ))}
       </div>
    </div>
  )
}

export default Testimonials
