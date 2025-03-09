import React from 'react'
import Logo from '/Bwomantailor.svg'
import Logo1 from '/Bmantailor.svg'
import Logo2 from '/Aman.svg'
import Logo3 from '/Wwoman.svg'
import Button from './ReusableComponent/Button'

const TopRatedDesigners = () => {
  return (
    
   <section className='md:px-8 px-0 pt-16 pb-2 w-auto '>
   {/* contaier for header */}
   <div className='mb-3'>
    <h5 className='text-hero_green text-[16px] text-center font-roboto font-bold'>Meet Our Experienced Designers</h5>
   </div>
   {/* end */}
   <div className='lg:flex lg:items-center mb-8 lg:justify-center md:gap-2 grid place-items-center justify-center md:grid-cols-2 grid-rows-1 gap-4 '> 
 {/* first_card */}
 <div className='  overflow-hidden bg-[#D3E2D7] transition-all duration-300 w-auto  h-auto cursor-pointer hover:shadow-md'>
    <div className='w-auto px-4 py-2'>
    <img src={Logo1} alt="" className='object-cover lg:w-[600px] md:w-[400px] w-[350px]' />
    </div>
 <div className='px-4 py-3 w-auto'>
 <h5 className='text-hero_green font-bold lg:text-[15px] md:text-[18px] text-[16px] font-poppins'>Kelvin joshua</h5>
<p className='text-hero_green lg:text-[12px] text-[14px] font-bold font-poppins'>Experience 5years</p>
<p className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Specialization-Groom Wear, Suit, ative Wears, Shirts,</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Alteration & Repair</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Rating-Excellent</p>
 </div>
 <div className='flex items-center justify-between mt-4'>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34]  " btnText="BOOK NOW"/>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34] " btnText="KNOW MORE"/>
 </div>

 </div>
 {/* second card */}
 <div className='  overflow-hidden transition-all bg-[#D3E2D7] duration-300 w-auto h-auto cursor-pointer hover:shadow-md'>
    <div className='w-auto px-4 py-2'>
    <img src={Logo} alt="" className='object-cover  lg:w-[600px] md:w-[400px] w-[350px] ' />
    </div>
 <div className='px-4 py-3 w-auto '>
 <h5 className='text-hero_green font-bold lg:text-[15px] md:text-[18px] text-[16px] font-poppins'>Kelvin joshua</h5>
<p className='text-hero_green lg:text-[12px] text-[14px] font-bold font-poppins'>Experience 5years</p>
<p className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Specialization-Groom Wear, Suit, ative Wears, Shirts,</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Alteration & Repair</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Rating-Excellent</p>
 </div>
 <div className='flex items-center justify-between mt-4'>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34]  " btnText="BOOK NOW"/>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34] " btnText="KNOW MORE"/>
 </div>

 </div>
   </div>

   <div className='lg:flex lg:items-center lg:justify-center  md:gap-2 grid place-items-center justify-center  grid-rows-1 md:grid-cols-2 gap-4 '> 
 {/* first_card */}
 <div className='  overflow-hidden bg-[#D3E2D7] transition-all duration-300 w-auto h-auto cursor-pointer hover:shadow-md'>
    <div className='w-auto px-4 py-2'>
    <img src={Logo3} alt="" className='object-cover lg:w-[600px] md:w-[400px] w-[350px]' />
    </div>
 <div className='px-4 py-3 w-auto'>
 <h5 className='text-hero_green font-bold lg:text-[15px] md:text-[18px] text-[16px] font-poppins'>Kelvin joshua</h5>
<p className='text-hero_green lg:text-[12px] text-[14px] font-bold font-poppins'>Experience 5years</p>
<p className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Specialization-Groom Wear, Suit, ative Wears, Shirts,</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Alteration & Repair</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Rating-Excellent</p>
 </div>
 <div className='flex items-center justify-between mt-4'>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34]  " btnText="BOOK NOW"/>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34] " btnText="KNOW MORE"/>
 </div>

 </div>
 {/* second card */}
 <div className='  overflow-hidden bg-[#D3E2D7] transition-all duration-300 w-auto h-auto cursor-pointer hover:shadow-md'>
    <div className='w-auto px-4 py-2'>
    <img src={Logo2} alt="" className='object-cover lg:w-[590px] md:w-[400px] w-[350px]' />
    </div>
 <div className='px-4 py-3 w-auto'>
 <h5 className='text-hero_green font-bold lg:text-[15px] md:text-[18px] text-[16px] font-poppins'>Kelvin joshua</h5>
<p className='text-hero_green lg:text-[12px] text-[14px] font-bold font-poppins'>Experience 5years</p>
<p className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Specialization-Groom Wear, Suit, ative Wears, Shirts,</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Alteration & Repair</p>
<p  className='text-hero_green lg:text-[12px]  text-[14px] font-bold font-poppins'>Rating-Excellent</p>
 </div>
 <div className='flex items-center justify-between mt-4'>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34]  " btnText="BOOK NOW"/>
<Button btnStyle="w-auto px-4 text-white font-Poppins font-semibold bg-[#224F34] " btnText="KNOW MORE"/>
 </div>

 </div>
   </div>
   </section>
  )
}

export default TopRatedDesigners