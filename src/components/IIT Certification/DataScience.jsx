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
import CourseNavbar from '../CourseNavbar'
function DataScience() {
    const data=[{
    heading1:"Data-Driven World is Here",
    description1:"Data is no longer just collected—it’s actively shaping decisions, strategies, and innovations everywhere"
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
             <CourseNavbar image="   https://files.codingninjas.in/new_cn_logo-29829.svg"  color="orange-600" btn="Request Callback"  />
        <Register name="NSDC" heading="Advanced Certification in Data Science with GenAI
" btn1="9 months" btn2="online" btn3="for graduates" desc1="Get Industry ready with hands-on projects" desc2="Expert-led live classes with instant doubt support" desc3="AI-infused curriculum designed by experts"    />
        <Name name="The industry is looking for Data Scientists."/>
        <Subbar/>
         <h1 className='text-center text-gray-600'>CURRICULUM</h1>
        <h1 className='text-center font-bold text-2xl mt-2'>Industry ready in 9 months</h1>
        <Syllabus d1="Retail Data Analysis" d2="Retail Data Cleanup" d3="Synthetic Fraud Data Generation" d4="Marketing Model Optimization" d5="House Price Predication" d6="Chinook Database Analysis" d7="& 6 more projects" heading1="Build projects like"
         t1="Introduction to Data Science" t2="Overview of data science and lifecycle" t3="Introduction to key tools and frameworks" t4="Introduction to Root Cuse Analysis(RCA)"  />
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

export default DataScience
