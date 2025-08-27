import React from 'react'
import BannerPage from '../components/BannerPage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Features'
import MentorCard from '../components/MentorCard'
import Offer from './Offer'
import Marque from '../components/Marque'
import Learn from '../components/Learn'
import Faculty from '../components/Faculty'
import Spotlight from '../components/Spotlight'
import Create from '../components/Create'
import Story from './Story'
import Certification from '../components/Certification'
import BigPage from './BigPage'

function Home() {
  return (
    <div>
        <Navbar/>
        <BannerPage/>
        <Offer/>
        <Story/>
        <Faculty/>
        <BigPage/>
        <MentorCard/>
        <Learn/>
        <Features/>
        <Marque/>
        <Create dir="left"/>
        <Spotlight/>
        <Certification/>
        <Footer/>
    </div>
  )
}

export default Home
