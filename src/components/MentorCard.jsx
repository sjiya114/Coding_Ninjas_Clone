import React from 'react'
import { cardData } from '../assets/assets'
import Card from './Card'

function MentorCard() {
  return (
    <>
    <div className='ml-[18%] mt-20'>
     <h1 className='font-semibold text-xl'>1:1 Mentorship sessions</h1>
    <p className='text-gray-600'>Personalised guidance to prepare you for your interview needs</p>
    <div className='flex flex-row space-x-10 my-20'>
       {cardData.map((card)=>(
        <Card title={card.title} para1={card.para1} para2={card.para2} image={card.image}  />
       ))}
    </div>
     </div>
    </>
  )
}

export default MentorCard
