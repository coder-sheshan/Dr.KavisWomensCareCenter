import React from 'react'
import Slider from '../Components/Slider'
import Aboutus from '../Components/Aboutus'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import Doctor from '../Components/Doctor'
import Faq from '../Components/Faq'
const Home = () => {
  return (
    <div>
        <Slider/>
        <Aboutus/>
        <Services/>
        <Faq/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home
