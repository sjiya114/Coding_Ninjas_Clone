import React from 'react'
import { assets } from '../../assets/assets'

function Table() {
  return (
    <div className='my-20 ml-[18%] max-md:ml-6 max-md:mr-6'>
                <table className=' border-2 rounded-2xl border-gray-300 px-2 py-2   '>
                    <thead className='bg-gray-200'>
                        <tr>
                        <td className='font-bold px-2 py-2'>Perks</td>
                        <td className='flex flex-col space-y-2 px-2 py-2' >
                                <p className='text-xl font-bold'>Regular Classes</p>
                                <p className='text-gray-600 font-semibold '>Live class on either MWF or TTS of the week</p>
                        </td>
                        <td cclassName='flex flex-col space-y-2 px-2 py-2'>
        
                                <p className='text-xl font-bold'>Weekend Classes</p>
                                <p className='text-gray-600 font-semibold'>Live class on Saturday and Sunday every week</p>
                
                        </td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr  className=''>
                         <td className='px-2 py-2'>Industry-standard curriculum by expert</td>
                        <td className='px-2 py-2' ><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                        <td className='px-2 py-2' ><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr  className='bg-gray-200'> 
                         <td className='px-2 py-2'>Live classes</td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr  className=''>
                        <td className='px-2 py-2' >1:1 live doubt support</td>
                        <td className='px-2 py-2' ><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                        <td  className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr  className='bg-gray-200'>
                        <td className='px-2 py-2'>  Dedicated, focused, personalised placement assistance</td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr  className=''>
                        <td className='px-2 py-2'>Relationship manager</td>
                        <td className='px-2 py-2'><img className='w-10 h-10' src={assets.correct} alt="" /></td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr  className='bg-gray-200'>
                        <td className='px-2 py-2'>Full fees refundable within 7 days</td>
                        <td className='px-2 py-2'><img className='w-10 h-10' src={assets.correct} alt="" /></td>
                        <td className='px-2 py-2'><img className='w-10 h-10'  src={assets.correct} alt="" /></td>
                    </tr>
                    <tr>
                        <td className='px-2 py-2' ></td>
                        <td className='px-2 py-2' >
                            <div className='flex flex-col space-y-2'>
                                <p>Price as low as</p>
                                <p className='font-bold'>₹5911 / month</p>
                                <button className='text-white bg-orange-600 w-fit h-fit px-2 py-2 rounded-lg'>Apply Now</button>
                            </div>
                        </td>
                        <td className='px-2 py-2' >
                            <div className='flex flex-col space-y-2'>
                                <p>Price as low as</p>
                                <p className='font-bold'>₹5911 / month</p>
                                <button className='text-white bg-orange-600 w-fit h-fit px-2 py-2 rounded-lg'>Apply Now</button>
                            </div>
                        </td>


                    </tr>
                    </tbody>
                </table>
                </div>
  )
}

export default Table
