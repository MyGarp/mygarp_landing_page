import React from 'react'
import Button from './ReusableComponent/Button'
import {BriefcaseBusiness} from 'lucide-react'
import logo from '/case.svg'
import Logo1 from '/dress.svg'
import Navbar from './ReusableComponent/Navbar'

const Hero = () => {
  return (
    <>
    <Navbar/>
    <section className='py-2 md:px-28 px-8   bg-[#C2EFD4] md:h-auto h-[100vh]'>
       {/* hero section */}
       <div className='py-24 md:flex flex-row items-start justify-center'>
       {/* flexing two containers */}
       <div>
        <h1 className='font-semibold text-hero_green md:text-[55px] text-[20px] w- mb-4 font-rufina'>
        DRESS TO IMPRESS WITH MY GARP
        </h1>
        <p className="text-[#267D49] md:text-[12px] text-[16px] leading-6 md:mb-4 mb-12 font-poppins md:w-[40%]  font-semibold">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
        <Button btnText="GET STARTED" btnStyle="text-white font-bold md:text-[12px] text-[16px] py-2 md:px-8 px-6  bg-hero_green rounded-sm"/>
       </div>
       {/* first container */}
       <div>
       <img src={Logo1} alt="" className='md:w-[500px] w-[300px] md:mt-0 mt-16' />
       </div>
       {/* second container */}
       </div>
    </section>
    </>
  )
}

export default Hero