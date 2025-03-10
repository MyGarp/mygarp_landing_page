import React from "react";
import Signup from "../Component/Signup";
import Navbar from "../Component/ReusableComponent/Navbar";
import Navbar2 from "../Component/ReusableComponent/Navbar2";
import Footer from "../Component/ReusableComponent/Footer";

const SignUpPage = () => {
  return (
    <>
      <Navbar2 />
      <Signup />
      <Footer />
    </>
  );
};

export default SignUpPage;
