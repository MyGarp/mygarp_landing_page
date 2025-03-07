import React from "react";
import Navbar2 from "./ReusableComponent/Navbar2";
import Logo1 from "/roundone.svg";
import Logo5 from "/Tailorequip.svg";
import Logo2 from '/round2.svg'
import Logo3 from "/round3.svg"
import Logos from '/Group 106.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorks = () => {
 
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: true,
    });
  }, []);
  
  return (
    <>
      <Navbar2 />
      <section  className="md:px-12 px-8 mt-16 py-4 bg-[#C2EFD4]" data-aos="fade-in">
        {/* for introduction */}
        <div className="mb-4">
          <h2 className="md:text-[36px] text-[26px] mb-4 text-hero_green  font-roboto font-bold text-center">
            How it Works
          </h2>
          <p className="md:text-[16px] text-[16px] font-semibold font-poppins text-center text-hero_green ">
            Create Your Perfect Piece in 4 simple steps
          </p>
        </div>
        {/* end */}
        {/* div for 4 boxes and a centered image */}
        <div className="lg:flex items-center justify-center flex-row">
          <div className="grid lg:grid-rows-1 gap-4 lg:place-items-start lg:justify-start place-items-center justify-center">
            {/* two box */}
            {/* first box */}
            <div className="rounded-sm lg:w-[422px] md:w-full w-[300px] h-auto   bg-[#D9D9D9DD]">
              <h2 className=" font-roboto_slab md:text-[24px] text-[24px] font-bold pl-4 mb-6 mt-4 text-hero_green">
                Choose Your Style
              </h2>
              <p className="text-hero_green lg:text-[12px] md:text-[18px] text-[16px] pl-4  font-poppins lg:w-full md:w-full w-[80%] mb-6">
                Browse our curated collection of styles or customize an existing
                design. Select from premium fabrics and materials that match
                your vision.
              </p>
              <div className="flex items-center justify-between w-auto ">
                {/* for image */}
                <div>
                  <img src={Logo1} alt="" />
                </div>
                {/* for btn */}
                <button className="bg-hero_green font-poppins text-[16px] text-white py-2 w-auto px-2">
                  BROWSE STYLES
                </button>
              </div>
            </div>
            {/* second_box */}
            <div className="rounded-sm lg:w-[422px] md:w-full w-[300px] h-auto   bg-[#D9D9D9DD]">
              <h2 className=" font-roboto_slab md:text-[24px] text-[24px] font-bold pl-4 mb-6 text-hero_green">
              Pick Your Designer
              </h2>
              <p className="text-hero_green lg:text-[12px] md:text-[18px] text-[16px] pl-4 font-poppins lg:w-[60%] md:w-full w-[60%] mb-6">
              Browse designer portfolios, reviews, and previous work. Choose the perfect creator for your style and budget.
              </p>
              <div className="flex items-center justify-between">
                {/* for image */}
                <div>
                  <img src={Logo2} alt="" className="" />
                </div>
                {/* for btn */}
                <button className="bg-hero_green font-poppins text-[16px] text-white py-2 w-auto px-2">
                  BROWSE DESIGNERS
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="py-4">
            <img
              src={Logo5}
              alt=""
              className="rounded-md  cursor-pointer overflow-hidden transition-all hover:shadow-md ease-out flex-shrink-0 lg:w-auto lg:h-auto md:w-full md:h-auto w-full  h-full  bg-cover "
            />
          </div>

          <div className="grid md:grid-rows-1 gap-4 lg:place-items-end lg:justify-end place-items-center justify-center ">
            {/* two box */}
            {/* fourth_box */}
            <div className="rounded-sm lg:w-[422px] w-[300px] md:w-full  h-auto  bg-[#D9D9D9DD] ">
              <h2 className=" font-roboto_slab md:text-[24px] text-[24px] font-bold capitalize  pl-4 mb-6 text-hero_green">
               add your measurement
              </h2>
              <p className="text-hero_green lg:text-[12px] md:text-[18px] text-[16px]  pl-4  font-poppins lg:w-[40%] md:w-full w-[60%] mb-6">
              Input your measurements for a perfect fit. Our detailed guide ensures accuracy for your chosen style.
              </p>
              <div className="flex items-center justify-between">
                {/* for image */}
                <div>
                  <img src={Logo3} alt="" />
                </div>
                {/* for btn */}
                <button className="bg-hero_green uppercase font-poppins text-[16px] text-white py-2 w-auto px-2">
                  measurement guide
                </button>
              </div>
            </div>
            {/* fifth_box */}
            <div className="rounded-sm lg:w-[422px] md:w-full w-[300px] h-auto bg-[#D9D9D9DD]">
              <h2 className=" font-roboto_slab md:text-[24px] text-[24px] font-bold pl-4 mb-6 text-hero_green pt-[0.3px]">
              Order & Receive
              </h2>
              <p className="text-hero_green lg:text-[12px] text-[18px] pl-4  font-poppins lg:w-[60%] w-full w-[70%] mb-6">
              Make secure payment and track your order. Get your custom-made piece delivered to your doorstep
              </p>
              <div className="flex items-center justify-between">
                {/* for image */}
                <div>
                  <img src={Logos} alt="" />
                </div>
                {/* for btn */}
                <button className="bg-hero_green font-poppins text-[16px] text-white py-2 uppercase w-auto px-2">
                  track order
                </button>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
