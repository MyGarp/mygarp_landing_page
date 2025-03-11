import React from "react";
import Logo1 from '/fecebook.svg'
import Logo2 from '/twitter.svg'
import Logo3 from '/Linkdon.svg'

const Footer = () => {
  return (
    <section className="md:py-8 md:px-28 py-6 px-4 bg-[#224F34] ">
      {/* container to add flex/or grid */}
      <div className="grid lg:grid-cols-4   lg:items-start flex-rows-1  place-items-start lg:gap-0 gap-6  md:grid-cols-3 grid-cols-3">
        {/* first div */}
        <div className="">
          <h3 className="mb-2 text-white text-[16px] md:text-[24px] font-semibold font-poppins">MyGarp</h3>
          <h5 className="text-white  font-roboto_slab mb-3 font-bold md:text-[18px] text-[12px]">
            Social Media
          </h5>
          <div className="flex gap-3">
            <img src={Logo1} alt="" className="w-[16px] md:w-[24px]" />
            <img src={Logo2}alt="" className="w-[16px] md:w-[24px]" />
            <img src={Logo3} alt="" className="w-[16px] md:w-[24px]" />
          </div>
        </div>
        {/* second div */}
        <div>
          <h5 className="text-white text-[16px] lg:text-[12px] md:text-[16px] font-roboto_slab font-bold ">SHOP</h5>
          <ul>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4]  ">Products</a></li>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">Overview</a></li> 
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">Pricing</a></li>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">Releases</a></li>
          </ul>
        </div>
        {/* third div */}
        <div>
          <h5 className="text-white text-[16px] lg:text-[12px] md:text-[16px] font-roboto_slab font-bold">COMPANY</h5>
          <ul>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4]  ">About Us</a></li>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">Contact</a></li> 
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">News</a></li>
            <li><a href="/" className="font-semibold font-poppins text-[12px] text-[#C2EFD4] ">Support</a></li>
          </ul>
        </div>
        {/* fourth div */}
        <div className="">
        <h5 className="text-white lg:text-[12px] md:text-[18px] text-[12px] font-roboto_slab font-bold mb-4">STAY UP TO DATE</h5>
        {/* input and btn */}
        <div className="flex gap-0 w-auto">
        <div className=" lg:px-2 lg:py-2 md:px-12 md:py-4 px-2 py-4 w-auto flex items-center border border-[#A3F3BE] justify-center bg-[#224F34]">
        <input type="text" className="bg-inherit placeholder:lg:text-[12px] text-white focus:outline   placeholder:md:text-[14px]  placeholder:text-[12px] placeholder:font-poppins placeholder:text-white " placeholder="Enter your email"  />
        </div>
        <button className=" w-auto px-2 py-2 lg:text-[12px] md:text-[16px] text-[14px] font-poppins bg-[#A3F3BE] text-[#224F34]">SUBMIT</button>
        </div>
        </div>
        {/* end of the four div */}
      </div>
      {/* end */}
      <div className="mt-16 flex gap-0 mb-[1rem] items-center justify-center">
       {/* div turns to line */}
       <div className="border border-b-[#A3F3BE] border-l-0 border-r-0 border-t-0 w-[850px] "></div>
       <div className="flex gap-4">
        <h5 className="font-poppins lg:text-[10px]  md:text-[18px] text-[10px] font-bold text-white">Terms</h5>
        <h5 className="font-poppins lg:text-[10px] md:text-[18px] text-[10px] font-bold text-white">Privacy</h5>
        <h5 className="font-poppins lg:text-[10px]  md:text-[18px] text-[10px]  font-bold text-white">Cookies</h5>
       </div>
      </div>
    </section>
  );
};

export default Footer;
