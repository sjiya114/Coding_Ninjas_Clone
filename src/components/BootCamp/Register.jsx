import React from 'react'
import Front from './Front'
import Phone from '../IIT Certification/Phone'

function Register({title,desc,btn1,btn2,btn3,btn4,p1,p2,p3,p4,s1,s2,s3,s4}) {
  return (
    <div className='bg-[#283141] pt-20 pb-20'>
    <div className='max-w-screen-xl  mx-auto flex flex-row max-lg:flex-col space-x-20 mt-20' >
      <Front title={title} desc={desc} s1={s1} s2={s2} s3={s3} s4={s4} p1={p1} p2={p2} p3={p3} p4={p4 } btn1={btn1} btn2={btn2} btn3={btn3} btn4={btn4} className="w-1/2"/>
      <Phone className="w-1/2"/>
    </div>
    </div>
  )
}

export default Register
