import React from 'react'
import Button from './ReusableComponent/Button'
import { Link } from 'react-router-dom'
import {ChevronDown } from 'lucide-react'
import Logo1 from '/Fashionequip.svg'

const Signup = () => {
  return (
    <div className='md:px-8 px-0'>
    <section className='md:mt-24 mt-8 md:grid md:place-items-end md:justify-end grid place-items-center justify-center    '>
      {/* flexing two div */}
      <div className='lg:flex lg:items-start lg:justify-start lg:gap-0  lg:mb-4  md:flex-row md:items-center md:justify-center md:w-full  grid grid-rows-2 place-items-center justify-center '>
     
     {/* div for form */}
    
     <div className='bg-[#224F34] px-8 py-4 lg:w-[620.21px] lg:h-[500px] md:w-[620px] w-[400px] ' >
      <h3 className='text-white font-poppins text-center py-4'>SIGNUP</h3>
      <div>
        <h4 className='text-white text-[14px] mb-2 font-poppins  pl-2 mt-2'>Name</h4>
        <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
              <input
                type="text"
                placeholder="Enter your Name "
                className="pl-4  w-full h-full text-white focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
              />
            </div>
      </div>
      {/* second_input password */}
     <div>
        <h4 className='text-white text-[14px] mb-2  left-2 md:pl-2 font-poppins mt-2'>EMail</h4>
        <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
              <input
                type="text"
                placeholder="Enter your Email "
                className="pl-4 md:pl-4 w-full text-white h-full focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
              />
            </div>
      </div>
        {/* second_input Login */}
     <div>
        <h4 className='text-white text-[14px] font-poppins mb-2 md:pl-2 left-2 mt-2'>Contact No</h4>
        <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
              <input
                type="text"
                placeholder="Enter your number "
                className="md:pl-4 pl-4 w-full text-white h-full focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
              />
              
            </div>
           
      </div>
      {/* password input */}
      <div>
        <h4 className='text-white text-[14px] font-poppins mb-2 md:pl-4 pl-2 mt-2'>Password</h4>
        <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
              <input
                type="password"
                placeholder="Enter your password"
                className="pl-4 md:pl-4 text-white w-full h-full focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
              />
              <h4 className='mt-4 text-[14px] font-poppins text-white '>signup As</h4>
            </div>
            
      </div>

      {/* signup As */}
      <div className='mt-12 '>
        <Link to="/signup">
      <Button btnStyle="px-12 py-1  text-white font-bold text-[14px] rounded-md  bg-[#224F34] border border-white flex items-center justify-center m-auto" btnText="signup"/>
      </Link>
      
      </div>
     </div>

     {/* div for image */}
     <div>
     <img src={Logo1} alt="" className='lg:h-[500px] flex-shrink-0 object-cover lg:w-auto md:w-[620px] md:h-[500px] w-full  h-[500px]' />
     </div>
     
     {/* end */}
      </div>
    </section>
    </div>
  )
}

export default Signup