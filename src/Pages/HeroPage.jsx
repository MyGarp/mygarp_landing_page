import React from "react";
import Hero from "../Component/Hero";
import Navbar from "../Component/ReusableComponent/Navbar";
import Footer from "../Component/ReusableComponent/Footer";

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
