import React from 'react'

function Page( {name,image}) {
  return (
    <div className='bg-white'>
      <div className='flex flex-row max-md:flex-col max-md:space-y-6 max-md:ml-6 space-x-6 max-w-screen-xl mx-auto py-20'>
      <div className='flex flex-col space-y-4'>
       <h1 className='font-bold text-3xl'>Feel like <span className='text-indigo-500'>Elite</span></h1>
        <p>Immerse yourself in your amazing success journey</p>
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/9316/9316730.png" alt="" />
                <p>Experience Orientation Ceremony at {name} campus</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/9316/9316730.png" alt="" />
                <p>Benefit from the AI infused curriculum co-designed with {name} IIT faculties</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" />
                <p>Get access to  {name} IIT faculty Guest Lectures</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/49/49119.png" alt="" />
                <p>Get an Admission Letter, ID Card and certificate to solidify your connection to the institution</p>
            </div>
        </div>
      </div>
      <div>
         <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Goodies.png" alt="" />
      </div>
    </div>
     {/* partr2
      */}
      <div className='flex flex-row space-x-40 max-md:flex-col max-md:space-y-6 max-md:ml-6 max-md:pr-6  max-w-screen-xl max-md:space-x-0 max-md:w-full mx-auto '>
       <div className='flex flex-col space-y-4'>
       <h1 className='font-bold text-3xl'>Succeed like <span className='text-indigo-500'>Top 1%</span> </h1>
        <p>Unlock the path to success with the mindset and perseverance of an IITian.</p>
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/9316/9316730.png" alt="" />
                <p>Celebrate your achievements with a prestigious graduation ceremony at  {name}</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/9316/9316730.png" alt="" />
                <p>Get access to exclusive guest lectures, workshops, and hackathons through the Coding Ninjas 10X clubs</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" />
                <p>Get an {name} alumni status and connect with top professionals</p>
            </div>
             <div className='flex flex-row space-x-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/49/49119.png" alt="" />
                <p>Career services post program completion by Coding Ninjas</p>
            </div>
        </div>
      </div>
      <div className='flex flex-row space-x-2 max-md:space-y-4 flex-wrap'>
        <img className='w-60 h-40 max-md:w-80 rounded-lg' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/11/7-1-768x432.jpg" alt="" />
        <img className='w-64 h-60 max-md:w-80 rounded-lg' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/11/8-1-768x432.jpg" alt="" />
        <img className='w-60 h-40 max-md:w-80 rounded-lg' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/11/9-1-768x432.jpg" alt="" />
        <img className='w-64 h-60 max-md:w-80 rounded-lg'  src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/11/6-1-768x432.jpg" alt="" />
      </div>
    </div>
    {/* part3 */}
    <div className='max-w-screen-xl mx-auto flex flex-row max-md:flex-col max-md:space-y-6 max-md:ml-6  justify-between mt-10'>
        <div>
          <h1 className='font-bold text-3xl mb-4'>Program <span className='text-indigo-500'>Certificate</span> </h1>
          <p>IITM Pravartak will award a certificate of successful completion to participants who complete the program successfully with 70% of the score in the evaluation. You should have watched at least 70% of the course content in your classroom to be considered eligible for program completion criteria and receive a certificate from IITM Pravartak</p>
          <span>Note: All certificate images are for illustrative purposes only and may be subject to change at the discretion of IITM Pravartak.</span>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Page
