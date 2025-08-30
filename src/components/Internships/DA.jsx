import React from 'react'
import { igdata } from '../../assets/assets'
import Front from './Front'
import Info from './Info'
import Page from './Page'
import Doubt from './Doubt'
import Collab from './Collab'
import Services from './Services'
import Marque from './Marque'
import Fee2 from './Fee2'
import Footer from './Footer'
import FAQ from '../IIT Certification/FAQ'
import CourseNavbar from '../CourseNavbar'
import { assets, ipdata } from '../../assets/assets'
function DA() {
  return (
    <div className='bg-blue-950'>
           <CourseNavbar image="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/iitg-logo-1732038065-1024x144.png"  color="blue-800" btn="Enroll now"  />
        <Front first="Student Training cum Internship
Program" second="Data Analytics with Gen AI" title="E&ICT Academy, IIT Guwahati"
       img1="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/11/2.png" img2="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Group-1437253907.png"  />
       <Info p1="10th September, 2025" p2="6 Months, Online" p3="Live Learning" p4="Students" s1="Deadline: 9th September, 2025" s2="Weekly Effort: 14-15 hours" s3="Monday, Wednesday, Friday
8-10 PM" s4="Pursuing Graduation"   />
       <Page name=" E&ICT IIT Guwahati" image="https://www.codingninjas.com/careercamp/wp-content/uploads/2025/01/Stu-DA-IITG-min-1.png"  />
        <Doubt/>
        <Services/>
        <Marque/>
        <Fee2/>
         <FAQ faqs={igdata} />
         <Footer/>
    </div>
  )
}

export default DA
