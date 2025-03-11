import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo1 from "/Fashionequip.svg";
import Button from "./ReusableComponent/Button";

const Login = () => {
  return (
    <div className="md:px-8 px-0 md:pb-4 pb-2">
      <section className="md:mt-24 mt-8 md:grid md:place-items-end md:justify-end grid place-items-center justify-center   ">
        {/* flexing two div */}
        <div className=" lg:flex lg:items-start lg:justify-start lg:gap-0  lg:mb-4  md:flex-row md:items-center md:justify-center md:w-full  grid grid-rows-2 place-items-center justify-center  ">
          {/* div for img */}
          <div>
            <img
              src={Logo1}
              alt=""
              className="lg:h-[500px] flex-shrink-0 object-cover lg:w-auto md:w-[620px] md:h-[500px] w-full  h-[500px]"
            />
          </div>

          {/* div for form */}
          <div className="bg-[#224F34] px-8 py-4 md:w-[620.21px] h-[500px] w-[400px] ">
            <h3 className="text-white font-poppins text-center py-4">LOGIN</h3>
            <div>
              <h4 className="text-white text-[14px] mb-2 font-poppins  pl-2 mt-2">
                Email
              </h4>
              <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
                <input
                  type="text"
                  placeholder="Enter your Email "
                  className="pl-4 w-full h-full focus:outline-none bg-[#224F34] text-white rounded-md placeholder:text-white placeholder:text-[14px] "
                />
              </div>
            </div>
            {/* second_input password */}
            <div>
              <h4 className="text-white text-[14px] mb-2  left-2 md:pl-2 font-poppins mt-2">
                Password
              </h4>
              <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md  ">
                <input
                  type="text"
                  placeholder="Enter your Password "
                  className="pl-4 md:pl-2 w-full h-full text-white focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
                />
              </div>
            </div>
            {/* second_input Login */}
            <div>
              <h4 className="text-white text-[14px] font-poppins mb-2 md:pl-2  mt-2">
                Login As
              </h4>
              <div className="border-[#E2E8F0] w-auto h-[40px] border relative rounded-md ">
                <input
                  type="text"
                  placeholder="Login as"
                  className="md:pl-4 pl-4 w-full h-full text-white focus:outline-none bg-[#224F34]  rounded-md placeholder:text-white placeholder:text-[14px] "
                />
                <ChevronDown
                  size={18}
                  color="white"
                  className="  text-red-500 absolute md:left-[32.9rem] left-[19rem] md:bottom-[3px] bottom-[6px]"
                />
                <p className="mt-4 text-white text-[12px] font-poppins flex items-center justify-end ">
                  Forgot Password?
                </p>
              </div>
            </div>

            {/* signup As */}
            <div className="md:mt-8 mt-16  mb-4">
              <Button
                btnStyle="px-12 py-1 text-white font-bold text-[14px]  rounded-md  bg-[#224F34] border border-white flex items-center justify-center m-auto"
                btnText="Login"
              />

              <Link to="/signup">
                <p className="mt-4 text-white text-[12px] font-poppins text-center ">
                  Dont have an account signup
                </p>
              </Link>
            </div>
          </div>
          {/* end */}
        </div>
      </section>
    </div>
  );
};

export default Login;
