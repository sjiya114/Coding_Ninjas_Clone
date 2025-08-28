import React from 'react'
import Doubt from './Doubt'
import { assets } from '../../assets/assets'
import FAQ from './FAQ'
import Footer from '../Footer'
import Create from '../Create'
import Price from './Price'
import Testimonials from './Testimonials'
import Instructor from './Instructor'
import Faculty from './Faculty'
import Career from './Career'
import Banner from './Banner'
import Campus from './Campus'
import Name from './Name'
import Register from './Register'
import Middle from './Middle'
import Subbar from './Subbar'
import Syllabus from './Syllabus'
import World from './World'
function GraduateNonAI() {
    const data=[{
    heading1:"A Gen AI first era is coming",
    description1:"AI is no longer an add-on, it’s becoming a core part of how coding happens."
  },{
    heading2:"Learn for the future",
    description2:"Get mentored by experts and build your skills with real-world, AI-integrated projects."
  },{
    heading3:"Prepare for your next job",
    description3:"Whether it’s a product startup or MNC, recruiters now value AI fluency in tech roles."
  },{
    heading4:"Gain a competitive edge",
    description4:"Get the skills, certification, and confidence to lead in this new tech era."
  }]
  return (
    <div>
        <Register name="NSDC" heading="Advanced Certification in GenAI for Non-tech Professionals
" btn1="6 Months" btn3="online" btn2="10+ Projects" desc1="Get Industry ready with hands-on projects" desc2="Expert-led live classes with instant doubt support" desc3="AI-infused curriculum designed by experts"    />
        <Name name="Roles evolving globally, GenAI fuels the shift."/>
        <Subbar/>
         <h1 className='text-center text-gray-600'>CURRICULUM</h1>
        <h1 className='text-center font-bold text-2xl mt-2'>Industry ready in 9 months</h1>
        <Syllabus d1="AI-Optimized LinkedIn Profile" d2="Case study on Amazon (Project Amelia)" d3="AI Based market research project" d4="Designing Prompts for Business Applications" d5="How Netflix and Amazon leverage AI" d6="& 10 more projects/cases" d7="" heading1="Build projects like" t1="What is Artificial Intelligence?" t2="Definitions and common misconceptions" t3="Generative AI vs traditional AI" t4="Difference between AI,ML and DL"  />
      <Banner/>
       <World data={data}/>
       <Career/>
      <Create dir="center"  />
      <Instructor category="ds"/>
      <Testimonials/>
      <Price heading="PG Certification in Data Science with GenAI" price="₹2,00,000/-" discount="₹ 7204/ month"  />
      <Doubt/>
      <FAQ faqs={assets.f2}/>
      <Footer/>
    </div>
  )
}

export default GraduateNonAI
