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
import CourseNavbar from '../CourseNavbar'
function DataAnalytics() {
  return (
    <div>
         <CourseNavbar image="https://files.codingninjas.com/iitg-logo-1732038065.png"  color="orange-600" btn="Download brochure"  />
      <Register name="E&ICT Academy IIT Guwahati" heading="PG Certification in Data Analytics with GenAI by E&ICT IIT Guwahati" desc1="Get a PG certification from E&ICT IIT Guwahati" desc2="Experience the IIT life with campus immersion" desc3="Alumni Status by E&ICT IIT Guwahati" btn1="6 months" btn2="online" btn3="for graduates"    />
        <Name name="The industry is looking for Data Analysts."/>
          <Subbar/>
            <h1 className='text-center text-gray-600'>CURRICULUM</h1>
        <h1 className='text-center font-bold text-2xl mt-2'>Industry ready in 6 months</h1>
        <Syllabus d1="US Healthcare Dataset" d2="India CPI Inflation" d3="Covid-19" d4="PowerBI Dashboard" d5="Retail Store" d6="E-Com Business" d7="& 6 more projects" heading1="Work on real-world case studies" t1="Introduction to Data Analytics" t2="Life ccyle of data analysis" t3="Introduction to data science" t4="Introduction to Business Problem"    />
         <Middle c1="Glassdoor" c2="Economic times" c3="Economic times" c4="NASSCOM" d1="9 LPA avg salary" d2="1 million new jobs by 2026" d3="52% growth in job posting" d4="51% skill gap" title="E&ICT IITG" />
        <Campus/>
      <Banner/>
       <Career/>
      <Create dir="center"  />
      <Faculty/>
      <Instructor category="da"/>
      <Testimonials/>
       <Price heading="PG Certification in Data Analytics with GenAI" discount="₹ 5911/ month" price="₹1,60,000/-" />
      <Doubt/>
      <FAQ faqs={assets.f3}/>
      <Footer/>
    </div>
  )
}

export default DataAnalytics
