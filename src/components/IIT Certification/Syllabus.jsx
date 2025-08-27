import React from 'react'
import Marquee from 'react-fast-marquee'
function Syllabus({heading1,d1,d2,d3,d4,d5,d6,d7,t1,t2,t3,t4}) {
  return (
    <div className='flex flex-col space-y-4 my-10 justify-center items-center'>
      <div className='border-2 border-gray-500 rounded-2xl w-[40%] '>
        <h1 className='text-[#394871] border-b-gray-500 border-b-2 mx-5 py-4'>Learn technologies like</h1>
        <div>
           <Marquee>
            <img src="https://files.codingninjas.in/frame-1437253629-1741868853.svg" alt="" />
            <img src="https://files.codingninjas.in/frame-1437253623-1741868851.svg" alt="" />
            <img src="https://files.codingninjas.in/frame-1437253617-1741868850.svg" alt="" />
            <img src="https://files.codingninjas.in/frame-1437253626-1741868852.svg" alt="" />
            <img src="https://files.codingninjas.in/python-1741865415.svg" alt="" />
            <img src="https://files.codingninjas.in/frame-1437253622-1741868851.svg" alt="" />
          </Marquee> 
        </div>
      </div>
      <div className='border-2 border-gray-500 rounded-2xl px-4 py-4 w-[40%] '>
        <h1 className='text-[#394871] border-b-gray-500 border-b-2 mx-5 py-4'>{heading1}</h1>
        <div className='flex flex-row mt-8 flex-wrap space-x-4 space-y-4'>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/path6578-1741857357.svg" alt="" />
                <p>{d1}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/path6088-1741857340.svg" alt="" />
                <p>{d2}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/group-1437252723-1741767118.svg" alt="" />
                <p>{d3}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/path6578-1741857357.svg" alt="" />
                <p>{d4}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/path6088-1741857340.svg" alt="" />
                <p>{d5}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/group-1437252723-1741767118.svg" alt="" />
                <p>{d6}</p>
            </button>
            <button className='flex flex-row space-x-2 px-2 py-2 rounded-lg border-1 border-gray-300'>
                <img src="https://files.codingninjas.in/path6088-1741857340.svg" alt="" />
                <p>{d7}</p>
            </button>
        </div>
      </div>
      <div className='border-2 border-gray-500 px-4 py-4 rounded-2xl w-[40%] '>
        <h1 className='text-[#394871] border-b-gray-500 border-b-2 mx-5 py-4'>Syllabus designed to take you ahead</h1>
        <p className='font-semibold px-4 mt-4 text-gray-900'>{t1}
           <ol className='text-gray-600 list-disc'>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
        </ol>
        </p>
       
      </div>
      <button className='text-white rounded-lg w-full font-bold py-3  bg-orange-600'>View full curriculum</button>
    </div>
  )
}

export default Syllabus
