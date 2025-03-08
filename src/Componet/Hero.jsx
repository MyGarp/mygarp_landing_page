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
       <div className='pt-24 lg:flex md:flex-row items-start justify-center'>
       {/* flexing two containers */}
       <div>
        <h1 className='font-semibold text-hero_green lg:text-[55px] md:text-[70px] text-[36px] lg:w-[55%] md:w-[100%] w-[80%] mb-4 font-rufina '>
        DRESS TO IMPRESS WITH MY GARP
        </h1>
        <p className="text-[#267D49] lg:text-[12px] md:text-[26px] text-[16px] lg:leading-6 md:leading-none md:mb-12 mb-12 font-poppins lg:w-[40%] md:w-[100%] w-[70%] font-semibold ">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
        <Button btnText="GET STARTED" btnStyle="text-white font-bold lg:text-[12px] md:text-[28px] text-[18px] lg:py-2 py-4  lg:px-8 md:py-4 md:px-12 px-8 md:mb-12 mb-4  bg-hero_green rounded-sm"/>
       </div>
       {/* first container */}
       <div className='pb-8'>
       <img src={Logo1} alt="" className='md:w-[500px] w-[300px] md:mt-0 mt-16 flex items-center justify-center  ' />
       </div>
       {/* second container */}
       </div>
    </section>
    </>
  )
}

export default Hero