import React from 'react'
import Logo1 from '/manImage.svg'
import Logo2 from '/womanImage.svg'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Testimonial = () => {
  return (
    <section className='px-16 py-4  md:px-8 bg-[#C2EFD4] mt-24 '>
    <div className='md:mb-12 mb-8'>
        <h2 className='text-hero_green text-center lg:text-[26px] font-bold md:text-[36px] text-[26px] font-roboto'>Testimonials</h2>
    </div>
    <div className='grid lg:grid-cols-3 place-items-center  mb-12 justify-center lg:justify-start grid-rows-1 lg:gap-6 gap-8  '>
    {/* three boxes container */}
    {/* first */}
    <div className='rounded-md bg-white hover:bg-[#C2EFD4] py-2 px-2 overflow-hidden duration-300 hover:shadow-md cursor-pointer'>
     <img src={Logo1} alt="" className='flex items-center justify-center m-auto mb-2' />
     <p className='text-[14px] font-poppins mb-4 flex items-center  text-center justify-center text-[#6F6F6F]'>The customer experience was exceptional 
        from start to finish. The website is user-friendly, the checkout process was smooth,
         and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
         <h3 className='text-[#224F34] font-serif mb-4 flex items-center font-bold justify-center'>Marvin Igbor</h3>
    </div>
    {/* sec */}
    <div className='rounded-md bg-white hover:bg-[#C2EFD4] py-2 px-2 overflow-hidden duration-300 hover:shadow-md cursor-pointer'>
     <img src={Logo2} alt="" className='flex items-center justify-center m-auto mb-2' />
     <p className='text-[14px] font-poppins mb-4 flex items-center  text-center justify-center text-[#6F6F6F]'>The customer experience was exceptional 
     I absolutely love the quality and style of the clothing I purchased from this website. Tracking was accurate, and I received my order quickly. Highly recommended!</p>
         <h3 className='text-[#224F34] font-serif mb-4 flex items-center font-bold justify-center'>Augustine Blessing</h3>
    </div>
    {/* third */} 
    <div className='rounded-md bg-white hover:bg-[#C2EFD4] py-2 px-2 overflow-hidden duration-300 hover:shadow-md cursor-pointer'>
     <img src={Logo2} alt="" className='flex items-center justify-center m-auto mb-2' />
     <p className='text-[14px] font-poppins mb-4 flex items-center  text-center justify-center text-[#6F6F6F]'>The customer experience was exceptional 
     I had a great experience shopping on this website. The clothes I bought are well tailored, fashionable and comfortable. Highly satisfied!</p>
         <h3 className='text-[#224F34] font-serif mb-4 flex items-center font-bold justify-center'>Basil Chidinma</h3>
    </div>
    {/* end */}
    </div>
    <div className='mb-4 flex items-center justify-center gap-8'>
     {/* flex two m-auto divs */}
     <div className='w-auto bg-white px-2 py-2 rounded-sm hover:bg-[#C2EFD4]'><ChevronLeft  color='black'/></div>
     <div className='w-auto bg-white px-2 py-2 rounded-sm hover:bg-[#C2EFD4]'><ChevronRight color='black' /></div>
    </div>
    </section>
  )
}

export default Testimonial