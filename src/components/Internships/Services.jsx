import React from 'react'

function Services() {
  return (
    <div className='text-white max-w-screen-xl mx-auto my-10'>
     <h1 className='bg-indigo-950 text-center text-3xl font-bold'>Coding Ninjas <span className='text-red-300'>Career Services</span> </h1>
      <div className='flex flex-row items-center pt-10 justify-center bg-indigo-950'>
     <div className='flex flex-row'>
      <div className='flex  space-y-4 px-4 py-2 border-r-2 border-red-200 flex-col'>
        <div className='flex flex-col space-y-4'> 
         <img  className='w-10 h-10'  src="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/03/job-interview.png" alt="" />
        <p>1:1 Mock interviews</p>
        <p>10 mock interviews / domain expert sessions with industry experts from reputed companies who have proven competencies in specific fields.</p>
       </div>
       <div className='flex flex-col   space-y-4'>
         <img className='w-10 h-10' src="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/03/resume.png" alt="" />
        <p>Profile building</p>
        <p>Our Profile Building program is designed to help professionals create a compelling and market-ready profile that stands out to potential employers</p>
       </div>
      </div>
       <div className='flex flex-col space-y-4  px-4 py-2 '>
          <div className='flex flex-col space-y-4'>
         <img  className='w-10 h-10'  src="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/03/briefcase.png" alt="" />
        <p>Access to job cell</p>
        <p>Our placement cell supports learners in their journey toward successful careers, providing access to top job openings.</p>
       </div>
       <div className='flex flex-col  space-y-4'>
        <img  className='w-10 h-10'  src="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/03/complaint.png" alt="" />
        <p>Resume Review</p>
        <p>Our Resume review service is designed to help you enhance your resume and increase your chances of landing interviews.</p>
       </div>
       </div>
    </div>
    </div>
    </div>
    
  )
}

export default Services
