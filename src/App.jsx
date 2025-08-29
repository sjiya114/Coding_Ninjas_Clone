import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import InternPhone from './components/courses/InternPhone'
import DataScience from './components/IIT Certification/DataScience'
import DataAnalytics from './components/IIT Certification/DataAnalytics'
import GENAI from './components/IIT Certification/GENAI'
import Analytics from './components/BootCamp/Analytics'
import Fullstack from './components/BootCamp/Fullstack'
import WebD from './components/Internships/WebD'
import DA from './components/Internships/DA'
import DSA from './components/Internships/DSA'
import GraduateMultiAI from './components/IIT Certification/GraduateMultiAI'
import GraduateNonAI from './components/IIT Certification/GraduateNonAI'
import Grads from './components/Grads'
import Clg from './components/Clg'
import NavComp from './components/NavComp'
import IITCard from './components/IITCard'
import JobCard from './components/JobCard'
import NewCard from './components/NewCard'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path='/bootcamp/1' element={<Analytics/>} ></Route>
        <Route path='/bootcamp/0' element={<Fullstack/>} ></Route>
           <Route path='/iit/0' element={<DataAnalytics/>}  ></Route>
            <Route path='/iit/1' element={<GENAI/>} ></Route>
            <Route path='/internship/0' element={<DSA/>} ></Route>
              <Route path='/internship/1' element={<DA/>} ></Route>
                <Route path='/internship/2' element={<WebD/>}></Route>
             <Route path='/newlaunch/0' element={<GraduateMultiAI/>} ></Route>
             <Route path='/newlaunch/1' element={ <GraduateNonAI/> } ></Route>
             <Route path='/newlaunch/2'element={<DataScience/>}  ></Route>
              <Route path='/grads'element={<Grads/>}  ></Route>
               <Route path='/clg'element={<Clg/>}  ></Route>
                 <Route path='/nav'element={<NavComp/>}  ></Route>
                  <Route path='/iitcard'element={<IITCard/>}  ></Route>
                   <Route path='/jobcard'element={<JobCard/>}  ></Route>
                    <Route path='/newcard'element={<NewCard/>}  ></Route>
      </Routes>
    </div>
    
  )
}

export default App
