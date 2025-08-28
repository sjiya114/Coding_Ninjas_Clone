import React from 'react'
import Front from './Front'
import Phone from './Phone'

function Register({ name, heading,desc1,desc2,desc3,btn1,btn2,btn3 }) {
  return (
    <div className='bg-gray-100'>
    <div className='max-w-screen-xl   mx-auto flex flex-row max-md:flex-col space-x-20 mt-20' >
      <Front name={name} heading={heading} desc1={desc1} desc2={desc2} desc3={desc3} btn1={btn1} btn2={btn2} btn3={btn3} className="w-1/2 max-md:w-full max-md:pl-10"/>
      <Phone className="w-1/2 max-md:w-full"/>
    </div>
    </div>
  )
}

export default Register
