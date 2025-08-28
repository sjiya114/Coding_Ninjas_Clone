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
function GraduateMultiAI() {
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
        <Register name="NSDC" heading="Advanced Certification in GenAI & Multi Agent Systems
" btn1="6 months" btn2="online" btn3="Tech Professionals" desc1="Get Industry ready with hands-on projects" desc2="Expert-led live classes with instant doubt support" desc3="AI-infused curriculum designed by experts"    />
        <Name name="Future Proof Your career with GEN AI Skills"/>
        <Subbar/>
        <h1 className='text-center text-gray-600'>CURRICULUM</h1>
        <h1 className='text-center font-bold text-2xl mt-2'>Industry ready in 9 months</h1>
         <Syllabus d1="AI-Powered Product Insight Generator" d2="Resume-to-Job Semantic Search Engine" d3="Smart Customer Support Chatbot System" d4="Custom Multi-Agent AI Ecosystem" d5="& 6 more projects" d6="" d7="" heading1="Work on Real-World Projects" t1="Prompt Engineering and API Integration" t2="Introduction to GEN AI" t3="Open source vs close source models" t4="Distinguishing AI,ML and DL"  />
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

export default GraduateMultiAI
