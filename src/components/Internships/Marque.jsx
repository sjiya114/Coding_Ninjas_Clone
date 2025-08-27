import React from 'react'
import Marquee from 'react-fast-marquee';
import { Pdata } from '../../assets/assets';
function Marque() {
  return (
     <Marquee>
        {Pdata.map((data)=>(
            <img className='w-100 h-100' src={data.image} alt="" />
        ))}
     </Marquee>
  )
}

export default Marque
