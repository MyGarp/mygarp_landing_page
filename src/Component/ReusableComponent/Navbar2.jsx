import React from 'react';
import { useState } from 'react';
import {X,AlignJustify} from 'lucide-react'
import {Link} from 'react-router-dom'
import Logo2  from '/case2.svg'
import Button from './Button';
import Logo from '/caseGreen.svg'

const Navbar2 = () => {
      //function to move to signup page


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
      <nav className="flex fixed top-[1rem] md:left-8 lg:opacity-100 md:opacity-25 opacity-25 left-8 md:right-8 right-8 w-auto  items-center justify-between  ">
        {/* span container */}
        <div>
          <Link
            to="/"
            className="font-roboto font-bold   text-[18px] text-hero_green"
          >
            MyGarp
          </Link>
        </div>
        {/* ul icon, login & signup container/div */}
        <div className="md:flex items-center justify-center gap-4 hidden ">
          <ul className="md:flex items-center justify-center gap-4 font-poppins hidden">
            <li className="uppercase text-[14px] font-semibold text-hero_green hidden md:block">
              <a href="/">HOME</a>
            </li>
           <Link to="/Howitworks" className="text-hero_green uppercase font-poppins font-semibold hidden md:block text-[14px] ">
          
           How It Works
           </Link>
       <Link
                  to="/Features"
                  className="text-hero_green font-semibold  font-poppinshidden md:block text-[14px] "
                >
                  FEATURES
                </Link>
            <li className="uppercase text-[14px] font-semibold text-hero_green hidden md:block">
              <a href="">CONTACT</a>
            </li>
           
          </ul>
          </div>
          <div className="md:flex gap-4 hidden">
          <img src={Logo} alt="" className="w-[18px] hidden md:block" />
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
                          className="text-hero_green font-semibold uppercase font-poppinshidden md:block text-[14px] "
                        >
                          Features
                        </Link>
            <li className=" text-[14px] font-semibold uppercase text-hero_green ">
              <a href="">contact</a>
            </li>
            <img src={Logo} alt="" className="w-[18px] " />
          </ul>
          <div className="flex gap-4 mt-4">
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
      </div>
      )}
    </>
    </div>
  )
}

export default Navbar2