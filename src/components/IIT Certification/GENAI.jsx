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

function GENAI() {
  return (
     <div>
        <Register name="IITM Pravartak, TIH IIT Madras
" heading="Advanced Certification in GenAI for Non-tech Professionals by IITM Pravartak
" btn1="6 months" btn3="online classes" btn2="10+ Projects" desc1="Get an Adv. certification from IITM Pravartak" desc2="Experience the IIT life with campus immersion" desc3="Alumni Status by E&ICT IIT Guwahati"    />
        <Name name="Roles evolving globally, GenAI fuels the shift."/>
         <Subbar/>
           <h1 className='text-center text-gray-600'>CURRICULUM</h1>
        <h1 className='text-center font-bold text-2xl mt-2'>Industry ready in 6 months</h1>
        <Syllabus d1="AI-Optimized LinkedIn Profile" d2="Case study on Amazon (Project Amelia)" d3="AI Based market research project"
         d4="Designing Prompts for Business Applications" d5="How Netflix and Amazon leverage AI" d6="& 10 more projects/cases" d7="" heading1="Build projects like" t1="What is Artificial Intelligence?" t2="Definition and common misconceptions" t3="Generative AI vs traditional AI" t4="Difference between AI ,ML and DL"    />
        <Middle c1="World Economic Forum
" c2="Economic times" c3="World Economic Forum
" c4="McKinsey GenAI Report" d1="30% of GenAI roles need no coding" d2="Only 18% of India is GenAI-ready" d3="40% roles of GenAI by 2027" d4="Non-tech drives 75% of GenAI use" title="an IITM Pravartak." />
        <Campus/>
      <Banner/>
       <Career/>
      <Create dir="center"  />
      <Testimonials/>
      <Price heading="GenAI for Non-tech Professionals by IITM Pravartak" price="₹1,30,000/-" discount="₹ 7204/ month"  />
      <Doubt/>
      <FAQ faqs={assets.f1}/>
      <Footer/>
    </div>
  )
}

export default GENAI
