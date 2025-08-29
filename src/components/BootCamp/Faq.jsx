import React from 'react'
import Question from '../IIT Certification/Question'

function Faq({faqs}) {
  return (
    <div   className='mt-10 hover:scale-101 pt-10 rounded-lg '>
        <h1 className='text-center text-2xl font-bold text-black pb-20'>Frequently Asked Questions</h1>
        <div className=' mx-[18%] max-md:mx-4 flex flex-col'>
        {
        faqs.map((faq,index)=>(
            <Question key={index} question={faq.question} answer={faq.answer}  />
        ))
        }
     </div>
    </div>
  )
}

export default Faq
