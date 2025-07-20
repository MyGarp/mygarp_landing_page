import React, { useState } from "react";
import Button from "./Button";
import Logo from "/case.svg";
import { Link } from "react-router-dom";
import { AlignJustify, Menu, X } from "lucide-react";

const Navbar = () => {
  //function to use the menu btn in mobile screen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to togglemenu btn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* navbar */}
      <nav className="flex sticky  top-0  h-[10vh] bg-[#C2EFD4] lg:px-24 md:px-24 px-8 w-auto   items-center justify-between  ">
        {/* span container */}
        <div>
          <Link
            to="/"
            className="font-roboto lg:font-mono font-bold  lg:text-[24px] md:text-[32px] text-[24px] text-hero_green"
          >
            PHASIONABLE
          </Link>
        </div>
        {/* ul icon, login & signup container/div */}
        <div className="lg:flex items-center justify-center gap-4 hidden ">
          <ul className="md:flex items-center justify-center gap-4 font-poppins hidden">
            <li className="uppercase text-[14px] font-semibold text-hero_green hidden md:block">
              <a href="/">Home</a>
            </li>
            <Link
              to="/Howitworks"
              className="text-hero_green font-semibold uppercase font-poppins hidden md:block text-[14px] "
            >
              How It Works
            </Link>
            <Link
              to="/Features"
              className="text-hero_green font-semibold uppercase  font-poppins hidden md:block text-[14px] "
            >
              Features
            </Link>

            <div className="text-hero_green font-semibold uppercase  font-poppins hidden md:block text-[14px]">
            Contact
            </div>
             
            
            <img src={Logo} alt="" className="w-[18px] hidden md:block" />
          </ul>
          <div className="flex gap-4">
            <Link to="/Login">
              <Button
                btnStyle="rounded-sm px-6 py-2 font-semibold border border-[#224F34] text-[12px] font-Poppins uppercase"
                btnText="LOG IN"
              />
            </Link>

            <Link to="/signup">
              <Button
                btnStyle="rounded-sm px-6 py-2 font-semibold uppercase text-white text-[12px] font-Poppins bg-[#224F34]"
                btnText="SIGN UP"
              />
            </Link>
          </div>
        </div>

        {/* menu_icon for mobile screen */}
        <button onClick={toggleMenu} className="lg:hidden  w-auto ">
          {isMenuOpen ? (
            <X className="h-24  w-[24px] md:h-[32px] md:w-[32px]" />
          ) : (
            <AlignJustify  className="h-24  w-[24px] md:h-[32px] md:w-[32px]" />
          )}
        </button>
      </nav>

      {/* navbar for mobile view */}
      {isMenuOpen && (
       
          <div className="lg:hidden w-full  left-0 top-16   bg-[#C2EFD4] flex-row py-4 px-4 ">
            <ul className=" gap-6  grid  font-poppins ">
              <li className="uppercase md:text-[30px] text-[22px] flex items-center justify-center  font-semibold text-hero_green ">
                <a href="/">Home</a>
              </li>
              <Link
                to="/Howitworks"
                className="uppercase font-poppins  md:text-[30px] text-[22px] flex items-center justify-center font-semibold text-hero_green"
              >
                How It works
              </Link>
              <Link
                to="/Features"
                className="text-hero_green  md:text-[30px] font-semibold flex items-center justify-center uppercase font-poppins text-[22px] "
              >
                Features
              </Link>
              <div className="text-hero_green   md:text-[30px] font-semibold flex items-center justify-center uppercase font-poppins text-[22px] ">Contact</div>
              <img src={Logo} alt="" className=" md:w-[30px] w-[24px] flex items-center justify-center m-auto " />
            </ul>
            <div className="grid grid-rows-2 place-items-center   gap-4 md:mt-8 mt-4">
              <Link to="/Login">
                <Button
                  btnStyle="rounded-md md:px-24 px-8 md:py-4 py-2 font-bold  border-4 border-green-900 md:text-[24px] font-bold text-[18px] font-Poppins uppercase"
                  btnText="LOG IN"
                />
              </Link>

              <Link to="/signup">
                <Button
                  btnStyle="rounded-md md:px-24 md:py-4 px-8 py-2 font-bold uppercase text-white md:text-[24px] text-[18px]  font-Poppins bg-[#224F34]"
                  btnText="SIGN UP"
                />
              </Link>
            </div>
          </div>
    
      )}
    </>
  );
};

export default Navbar;
