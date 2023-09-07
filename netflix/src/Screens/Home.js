import React from 'react'
import Slider from '../Components/Slider'
import Aboutus from '../Components/Aboutus'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Slider/>
        <Aboutus/>
        <Services/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home
