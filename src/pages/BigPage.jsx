import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BigPage.css'
function BigPage() {
   useEffect(()=>{
    AOS.init({});
   },[])
  return (
    <div className='bg-black text-white'>
       <div>
        <div className='flex flex-col font-bold  pt-20 items-center justify-center'>
         <p  data-aos="fade down" className=' text-gray-600 text-7xl max-md:text-center max-md:text-4xl animate-text'>9 years of transforming tech careers</p>
         <div  data-aos="fade down"  className='flex flex-col mt-40 text-gray-600 space-y-2 items-center justify-center animate-text'>
            <img src={assets.one} className='bg-gray-400    rounded-2xl px-1 py-1 w-20 h-20' alt="" />
            <h1 className='text-8xl max-md:text-4xl max-md:text-center'>1.5 Lac+ learners</h1>
            <p className='text-4xl font-semibold max-md:text-lg max-md:text-center '>cracked dream roles at top tech companies</p>
         </div>
            <p data-aos="fade down"  className='border-gray-600 border-1 border-dashed  h-80  animate-text '></p>
          <div    data-aos="fade down" className='flex flex-col text-gray-600 space-y-2 items-center justify-center animate-text'>
            <img src={assets.two} className='bg-gray-400 rounded-2xl px-1 py-1 w-20 h-20' alt="" />
            <h1 className='text-8xl max-md:text-center max-md:text-4xl'>1,400 Alumni in MAANG</h1>
            <p className='text-4xl font-semibold max-md:text-center max-md:text-lg'>& more in 103/111 Unicorns</p>
         </div>
            <p className='border-gray-600 border-1 border-dashed  h-80   '></p>
         <div  data-aos="fade down" className='flex flex-col  text-gray-600  space-y-2 items-center justify-center animate-text'>
            <img src={assets.three} className='bg-gray-400 rounded-2xl px-1 py-1 w-20 h-20' alt="" />
            <h1 className='text-8xl max-md:text-4xl max-md:text-center'>1 Cr+ highest CTC</h1>
            <p className='text-4xl font-semibold max-md:text-lg max-md:text-center'>after completing the course</p>
         </div>
             <p className='border-gray-600 border-1 border-dashed  h-80   '></p>
          <div  data-aos="fade down" className='flex flex-col  text-gray-600  space-y-2 items-center justify-center animate-text'>
            <img src={assets.four} className='bg-gray-400 rounded-2xl px-1 py-1 w-20 h-20' alt="" />
            <h1 className='text-8xl max-md:text-4xl max-md:text-center'>128% average hike</h1>
            <p className='text-4xl font-semibold max-md:text-lg max-md:text-center'>via our placement cell</p>
         </div>
         </div>
         <div className='flex items-center mt-40 justify-center mb-20 animate-text'>
        <button className='flex bg-orange-600 px-2 py-2 rounded-lg flex-row space-x-4'>
            <span className='text-white'>Explore offerings</span>
            <img src="https://files.codingninjas.com/arrow-double-down-32073.svg" alt="" />
        </button>
     </div>
         <h1 className='text-center max-md:my-6'>WHY US</h1>
         <div className='text-white ml-[18%] flex flex-row max-md:flex-col max-md:space-y-6 max-md:ml-6 max-md:mr-6 space-x-10'>
            <div className='flex flex-col'>
              <div className='border-1 border-gray-200 rounded-lg w-100 h-100 max-md:w-full max-md:h-full'>
               <video  src=""></video>
              </div>
              <div >
               <h1 className='text-yellow-700 font-semibold'>Ankush Singla</h1>
               <p>Co-Founder of Coding Ninjas | Mentor</p>
              </div>
            </div>
            <div className='flex flex-col space-y-6'>
               <div className='flex flex-row space-x-4 px-4 py-4  rounded-lg border-gray-700 border-1'>
                <img className='w-8 h-8' src={assets.chat} alt="" />
                <p className='font-semibold'>Fastest 1:1 doubt support</p>
               </div>
               <div className='flex flex-row space-x-4 px-4 py-4  rounded-lg border-gray-700 border-1'>
                 <img className='w-8 h-8'  src={assets.faculty} alt="" />
                <p  className='font-semibold'>Stanford/IIT/MAANG faculty</p>
               </div>
               <div className='flex flex-row space-x-4 px-4 py-4  rounded-lg border-gray-700 border-1'>
                 <img className='w-8 h-8' src={assets.bag} alt="" />
                <p  className='font-semibold'>Placement assistance</p>
               </div>
            </div>
         </div>
         <h1 className='text-blue-500 mb-10 ml-[18%] max-md:text-center max-md:ml-0 max-md:my-10 font-semibold text-center'>The Coding Ninjas advantage</h1>
         <div className='text-white ml-[18%] max-md:ml-6 max-md:mr-6 '>
            <table className='w-[90%] max-md:w-full flex flex-col space-y-10 border-1 border-gray-100 rounded-lg px-4 py-4'>
                <tr>
                    <td className='w-[60%]'></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.icon} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.correct} alt="" /></td>
                </tr>
                <tr  className=''>
                    <td className='w-[60%]'>Structured + problem solving based</td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.tick} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                </tr>
                <tr  className=''>
                    <td className='w-[60%]'>Fastest 1:1 doubt support</td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.tick} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                </tr>
                <tr  className=''> 
                    <td className='w-[60%]'>Integrated prep platform</td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.tick} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                </tr>
                <tr  className=''>
                    <td className='w-[60%]'>Profiles highlighted on Naukri</td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.tick} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                    <td className='w-[30%]'><img className='w-8 h-8' src={assets.cross} alt="" /></td>
                </tr>
            </table>
            <div>
                <div>
                   <img src="" alt="" />
                   <p></p>
                </div>
                <div>
                   <p></p>
                   <img src="" alt="" />
                </div>
            </div>
             <div>
                <div>
                   <img src="" alt="" />
                   <p></p>
                </div>
                <div>
                   <p></p>
                   <img src="" alt="" />
                </div>
            </div>
         </div>
        <div className='flex items-center mt-10 justify-center pb-20'>
        <button className='flex bg-orange-600 px-2 py-2 rounded-lg flex-row space-x-4'>
            <span className='text-white'>Explore offerings</span>
            <img src="https://files.codingninjas.com/arrow-double-down-32073.svg" alt="" />
        </button>
     </div>    

       </div>
    </div>
  )
}

export default BigPage
