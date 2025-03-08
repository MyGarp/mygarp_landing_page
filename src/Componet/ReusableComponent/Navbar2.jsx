import React from 'react';
import { useState } from 'react';
import {X,AlignJustify} from 'lucide-react'
import {Link} from 'react-router-dom'
import Logo2  from '/case2.svg'
import Button from './Button';

const Navbar2 = () => {
      //function to move to signup page
  const gotoSignup = () => {
    window.location.href = "/signup";
  };

  //function to move to Login page
  const gotoLogin = () => {
    window.location.href = "/Login";
  };

  //function to use the menu btn in mobile screen
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  //function to togglemenu btn
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
        <>
      {/* navbar */}
      <nav className="flex fixed top-[1rem] md:left-8 left-8 md:right-8 right-8 w-auto  items-center justify-between  ">
        {/* span container */}
        <div>
          <Link
            to="/"
            className="font-roboto font-bold text-[24px] text-hero_green"
          >
            MyGarp
          </Link>
        </div>
        {/* ul icon, login & signup container/div */}
        <div className="md:flex items-center justify-center gap-4 hidden ">
          <ul className="md:flex gap-4 font-poppins hidden">
            <li className="uppercase text-[14px] font-semibold text-hero_green hidden md:block">
              <a href="/">Home</a>
            </li>
           <Link to="/Howitworks" className="text-hero_green font-poppins font-semibold hidden md:block text-[14px] ">
          
           How It Works
           </Link>
       <Link
                  to="/Features"
                  className="text-hero_green font-semibold  font-poppinshidden md:block text-[14px] "
                >
                  Features
                </Link>
            <li className="uppercase text-[14px] font-semibold text-hero_green hidden md:block">
              <a href="">contact</a>
            </li>
           
          </ul>
          </div>
          <div className="md:flex gap-4 hidden">
          <img src={Logo2} alt="" className="w-[18px] hidden md:block" />
            <Button
              btnStyle="rounded-sm px-6 py-2 font-semibold border border-[#224F34] text-[12px] font-Poppins uppercase"
              btnText="LOG IN"
              btnFunc={gotoLogin}
            />
            <Button
              btnStyle="rounded-sm px-6 py-2 font-semibold uppercase text-white text-[12px] font-Poppins bg-[#224F34]"
              btnText="SIGN UP"
              btnFunc={gotoSignup}
            />
          </div>
        

        {/* menu_icon for mobile screen */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen?<X/>:<AlignJustify/>}
        </button>

      </nav>

      {/* navbar for mobile view */}
      {isMenuOpen&& (<div className=" pb-[10rem]"> 
        <div className="md:hidden w-full absolute left-0 top-16  bg-white flex-row py-4 px-4">
       
          <ul className="grid grid-cols-1  gap-6 font-poppins ">
            <li className="uppercase text-[14px] font-semibold text-hero_green ">
              <a href="/">Home</a>
            </li>
            <li className="uppercase text-[14px] font-poppins font-semibold text-hero_green ">
              <a href="">How It works</a>
            </li>
               <Link
                          to="/Features"
                          className="text-hero_green font-semibold  font-poppinshidden md:block text-[14px] "
                        >
                          Features
                        </Link>
            <li className="uppercase text-[14px] font-semibold text-hero_green ">
              <a href="">contact</a>
            </li>
            <img src={Logo2} alt="" className="w-[18px] " />
          </ul>
          <div className="flex gap-4 mt-4">
            <Button
              btnStyle="rounded-sm px-6 py-2 font-semibold border border-[#224F34] text-[12px] font-Poppins uppercase"
              btnText="LOG IN"
              btnFunc={gotoLogin}
            />
            <Button
              btnStyle="rounded-sm px-6 py-2 font-semibold uppercase text-white text-[12px] font-Poppins bg-[#224F34]"
              btnText="SIGN UP"
              btnFunc={gotoSignup}
            />
          </div>
       
      </div>
      </div>
      )}
    </>
    </div>
  )
}

export default Navbar2