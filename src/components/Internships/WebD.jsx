import React from 'react'
import Front from './Front'
import Info from './Info'
import Page from './Page'
import Doubt from './Doubt'
import Collab from './Collab'
import Services from './Services'
import Marque from './Marque'

import Fee3 from './Fee3'
import Footer from './Footer'
import FAQ from '../IIT Certification/FAQ'
import { assets, ipdata } from '../../assets/assets'
import CourseNavbar from '../CourseNavbar'
function WebD() {
  return (
    <div className='bg-[#283141]'>
         <CourseNavbar image="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Group-1437253905-1.png"   color="blue-800" btn="Enroll now"  />
      <Front first="Training and Internship Certification" second="Full Stack Web Development
with Generative AI + DSA" title="IITM Pravartak"
       img1="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Group-1437253907.png" img2="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Group-1437253907.png"  />
       <Info p1="Next Wednesday" p2="9 Months, Online" p3="Course Pause" p4="Students" s1="Deadline: Tuesday 11:59 P.M." s2="Weekly Effort: 14-15 hours" s3="60 Days" s4="Pursuing Graduation"   />
       <Page name="IITM Pravartak" image="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/IITM-Certificate-1024x724.png"  />
        <Doubt/>
        {/* <Collab/> */}
        <Services/>
        <Marque/>
        <Fee3/>
         <FAQ faqs={ipdata
         } />
         <Footer/>
    </div>
  )
}

export default WebD

