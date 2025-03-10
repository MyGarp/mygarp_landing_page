import React from "react";
import Testimonial from "../Component/Testimonial";
import Navbar2 from "../Component/ReusableComponent/Navbar2";
import Footer from "../Component/ReusableComponent/Footer";
import TopRatedDesigners from "../Component/TopRatedDesigners";

const FeaturesPage = () => {
  return (
    <>
      <Navbar2 />
      <TopRatedDesigners />
      <Testimonial />
      <Footer />
    </>
  );
};

export default FeaturesPage;
