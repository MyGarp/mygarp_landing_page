import React from "react";
import Hero from "../Component/Hero";
import Navbar from "../Component/ReusableComponent/Navbar";
import Footer from "../Component/ReusableComponent/Footer";
import Testimonial from "../Component/Testimonial";
const HeroPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Footer />
    </>
  );
};

export default HeroPage;
