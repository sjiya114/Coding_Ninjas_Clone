import React from 'react'
import Question from './Question'

function FAQ({faqs}) {
  return (
    <div   className='mt-10 hover:scale-101 pt-10 rounded-lg '>
        <p className='text-center pt-20 text-gray-500'>BEFORE YOU ASK</p>
        <h1 className='text-center text-2xl font-bold text-black pb-20'>Here’s what you need to know</h1>
        <div className=' mx-[18%] flex flex-col'>
        {
        faqs.map((faq)=>(
            <Question question={faq.question} answer={faq.answer}  />
        ))
        }
     </div>
    </div>
  )
}

export default FAQ
