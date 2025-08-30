import React from 'react'
import Footer from '../Footer'
import FAQ from '../IIT Certification/FAQ'
import Certification from '../Certification'
import Faq from './Faq'
import Query from './Query'
import { r1 } from '../../assets/assets'
import Plan from './Plan'
import Broucher from './Broucher'
import Register from './Register'
import Create from '../Create'
import Faculty from '../Faculty'
import CourseNavbar from '../CourseNavbar'

function Analytics() {
  return (
    <div>
       <CourseNavbar image="https://files.codingninjas.com/new-cn-logos-34283.webp"  color="orange-600" btn="Request Callback"  />
        <Register title="Data Analytics Job Bootcamp with GenAI" desc="Get years ahead in just six months through practice-based learning and real-world projects." btn1="Live learning" btn2="AI infused curriculum" btn3="Real world case studies" btn4="" s1="Live Classes"  s2="Companies Hiring" s3="Placement rate" s4="Learners" p1="100%" p2="1200+" p3="95%" p4="1.5L+" />
        <Broucher/>
        <Create/>
        <Faculty/>
        <Plan/>
      <Query/>
     <Faq faqs={r1}/>
     <Certification/>
     <Footer/> 
    </div>
  )
}

export default Analytics
