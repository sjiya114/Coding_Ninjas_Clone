import React from 'react'
import {motion} from 'framer-motion'
function Features() {
  return (
    <div className='bg-black h-full min-xl:h-screen max-md:pb-12'>
       <div className=' max-w-screen-xl leading-3.5 flex flex-col mx-80 max-md:mx-0 max-md:mr-6 max-md:ml-3 max-md:w-full  space-y-16'>
       <motion.p  whileInView={{color:'yellow'}} viewport={{margin:'-500px'}} className='text-white mt-20 text-xl font-semibold'>Always available when you stuck</motion.p>
       <motion.p  whileInView={{color:'yellow'}} viewport={{margin:'-500px'}} className='text-zinc-800 text-5xl max-md:text-3xl font-bold'>Resolve doubts any time through chat, voice notes or calling.</motion.p>
       <motion.p  whileInView={{color:'yellow'}} viewport={{margin:'-500px'}}  className='text-zinc-800 text-5xl max-md:text-3xl font-bold'>500+ dedicated Teaching Assistants to resolve your doubts quickly</motion.p>
       <motion.p  whileInView={{color:'yellow'}} viewport={{margin:'-500px'}}  className='text-zinc-800 text-5xl max-md:text-3xl font-bold'>5/5 rating for 90% doubt resolutions</motion.p>
    </div>
    </div>
  )
}

export default Features
 