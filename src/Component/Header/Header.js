import React from "react";
import "./Header.css";
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import img1 from "../../Asstets/temp/abs1.png";
import { TypeAnimation } from "react-type-animation";


const Header = () => {
  return (
    <div className="h-[598px] flex px-[94px] bg-[#1053FF]">
      <div className="w-[60%]">

        <h1 className="font-[800] font-[inter] text-[54px] text-white mt-[99px]">
          Trusted Web Hosting Site For <br /> Your
    
          <TypeAnimation
            sequence={['Website.', 2000, '']}
            speed={5}
            wrapper="h2"
            repeat={Infinity}
            className="text-[#449AFF] website ml-4"
          />
    
        </h1>

        <p className="font-[600] text-[20px] text-white mt-[61px]">
          Dedicated resource, full root access & easy scaling, It is the virtual
          private server you’ve been <br /> cravin’
        </p>

        <div className="flex mt-[97px] font-[500] text-[14px]">
          <div className="w-[148px] h-[41px] text-white bg-[#FF9649] rounded-[5px]  mr-[38px]">
            <button className="getStartedBtn flex justify-center justify-items-center px-[20px] py-[11px] ">
              <BsArrowRight className="mt-[1px] text-xl mr-2" /> Get Started
            </button>
          </div>

          <div className="w-[148px] h-[41px] text-black bg-white rounded-[5px]  mr-[38px]">
            <button className="flex justify-center justify-items-center px-[20px] py-[11px] ">
              <BsFillTelephoneFill className="mt-[1px] text-xl mr-2" /> Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className=" w-[40%] text-[40px] text-white grid content-center justify-center font-bold">
        <img src={img1} className="" id="zio" alt="" />
      </div>

    </div>
  );
};

export default Header;