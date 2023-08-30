import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Aboutus from '../Components/Aboutus'
import Doctor from '../Components/Doctor'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Slider/>
        <Aboutus/>
        <Services/>
        <Doctor/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home
