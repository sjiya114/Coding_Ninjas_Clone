import React from 'react'
import { color, motion } from 'framer-motion'
function Name() {
   const letterAnimation = {
  initial: { color: "gray" },
  animate: { color: "white" },
};
  return (
     <div className='bg-black h-[50vh] flex items-center justify-center'>
       <h1 
     className='text-zinc-950 text-shadow-2xs shadow-2xl text-9xl max-md:text-8xl max-md:text-center font-bold'>Coding Ninjas</h1>
        <motion.span   animate={{ marginRight: ["55%", "-48%"] }}
  transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
    ease: "easeInOut"
  }}
    className="w-[40px] h-[0px]  absolute mb-[80px] rounded-full"
    style={{
      background: "black",
      boxShadow: "0px 40px 60px 20px rgba(255,255,255,0.5)",
    }}
  ></motion.span>
      </div>
  )
}

export default Name
