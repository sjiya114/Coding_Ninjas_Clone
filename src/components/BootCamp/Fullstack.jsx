import React from 'react'
import FAQ from '../IIT Certification/FAQ'
import Certification from '../Certification'
import { assets, r2 } from '../../assets/assets'
import Faq from './Faq'
import Query from './Query'
import Plan from './Plan'
import Broucher from './Broucher'
import Register from './Register'
import Create from '../Create'
import Faculty from '../Faculty'
import Footer from '../Footer'
import Benefits from './Benefits'
import Placement from './Placement'
import Table from './Table'
import Banner from './Banner'
import Journey from './Journey'

function Fullstack() {
  return (
    <div>
        <Register  title="Full Stack Web Development Job Bootcamp with GenAI" desc="Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects." btn1="Placement assistance" btn2="AI-infused curriculum" btn3="Faculty from MAANG" btn4="1:1 mentorship" s1="placement rate"  s2="Companies Hiring" s3="Average hike" s4="Learners" p1="95%" p2="1200+" p3="128%" p4="1.5L+"/>
        <Create/>
        <Journey/>
        <Placement/>
        <Benefits/>
        <Faculty/>
        <Broucher/>
        <Plan/>
        <Banner/>
        <Table/>
        <Query/>
     <Faq  faqs={r2}/>
     <Certification/>
     <Footer/> 
    </div>
  )
}

export default Fullstack
