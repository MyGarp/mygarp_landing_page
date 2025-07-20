import React from 'react';
import { useState } from 'react';
import {X,AlignJustify} from 'lucide-react'
import {Link} from 'react-router-dom'
import Logo2  from '/case2.svg'
import Button from './Button';
import Logo from '/caseGreen.svg'

const Navbar2 = () => {
  //function to use the menu btn in mobile screen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to togglemenu btn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* navbar */}
      <nav className="flex sticky h-[10vh]  top-0 bg-white pt-2 lg:px-8 md:px-24 px-8 w-auto   items-center justify-between  ">
        {/* span container */}
        <div>
          <Link
            to="/"
            className=" lg:font-mono font-roboto font-bold  lg:text-[24px] md:text-[36px] text-[24px] text-hero_green"
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

            <div className='text-hero_green font-semibold uppercase font-poppins hidden md:block text-[14px] '>
              Contact
            </div>
            <img src={Logo} alt="" className="w-[18px] hidden md:block" />
          </ul>
          
        </div>
        <div className="lg:flex gap-4 hidden">
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

        {/* menu_icon for mobile screen */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <X size={30} />
          ) : (
            <AlignJustify size={30} className="" />
          )}
        </button>
      </nav>

      {/* navbar for mobile view */}
      {isMenuOpen && (
       
          <div className="lg:hidden w-full  left-0 top-16  flex-row py-4 px-4 ">
            <ul className="grid md:grid-cols-2  grid-rows-1 gap-6 items-center   font-poppins ">
              <li className="uppercase text-[14px] font-semibold text-hero_green ">
                <a href="/">Home</a>
              </li>
              <Link
                to="/Howitworks"
                className="uppercase font-poppins text-[14px] font-semibold text-hero_green"
              >
                How It works
              </Link>
              <Link
                to="/Features"
                className="text-hero_green font-semibold uppercase font-poppins text-[14px] "
              >
                Features
              </Link>
              <div className='text-hero_green font-semibold uppercase font-poppins  text-[14px] '>
              Contact
            </div>
              <img src={Logo} alt="" className="w-[18px] " />
            </ul>
            <div className="flex  gap-4 mt-4">
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
    
      )}
    </>
  );
};


export default Navbar2