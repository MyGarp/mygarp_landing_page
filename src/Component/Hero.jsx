import React from 'react'
import Button from './ReusableComponent/Button'
import {BriefcaseBusiness} from 'lucide-react'
import logo from '/case.svg'
import Logo1 from '/dress.svg'
import Navbar from './ReusableComponent/Navbar'

const Hero = () => {
  return (
    <>
    
    <section className='py-2 md:px-28 px-8   bg-[#C2EFD4] md:h-auto '>
       {/* hero section */}
       <div className='pt-24 lg:flex md:flex-row items-start justify-center'>
       {/* flexing two containers */}
       <div>
        <h1 className='md:font-semibold text-hero_green md:text-left text-center lg:text-[55px] md:text-[70px] text-[21.1px]  lg:w-[75%] md:w-[100%] w-full mb-4 font-rufina font-bold '>
        DRESS TO IMPRESS WITH MY GARP
        </h1>
        <p className="text-[#267D49] lg:text-[12px] md:text-[26px] text-[14px] md:text-left text-center md:mb-12 mb-12 font-poppins lg:w-[40%] md:w-[100%] w-auto font-semibold ">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
        <Button btnText="GET STARTED" btnStyle="text-white font-bold lg:text-[12px] md:text-[28px] text-[16px] lg:py-3 py-3 lg:px-8 md:py-4 md:px-12 w-full  md:mb-12 mb-4  bg-hero_green rounded-sm"/>
       </div>
       {/* first container */}
       <div className='pb-4 '>
       <img src={Logo1} alt="" className='max-w-full  md:mt-0 mt-16 flex items-center justify-center  ' />
       </div>
       {/* second container */}
       </div>
    </section>
    </>
  )
}

export default Hero