import React from 'react'
import Testimonial from '../Componet/Testimonial'
import Navbar2 from '../Componet/ReusableComponent/Navbar2'
import Footer from '../Componet/ReusableComponent/Footer'
import TopRatedDesigners from '../Componet/TopRatedDesigners'

const FeaturesPage = () => {
  return (
    <>
   <Navbar2/>
   <TopRatedDesigners/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default FeaturesPage