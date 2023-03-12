import React from "react";
import "./Header.css";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <div className="h-[598px] flex px-[94px] bg-[#1053FF]">
      <div className="border w-[65%]">
        <h1 className="font-[800] font-[inter] text-[54px] text-white mt-[99px]">
          Trusted Web Hosting Site For <br /> Your{" "}
          <span className="text-[#449AFF]">Website.</span>
        </h1>

        <p className="font-[600] text-[20px] text-white mt-[61px]">
          Dedicated resource, full root access & easy scaling, It is the virtual
          private server you’ve been <br /> cravin’
        </p>

        <div className="flex mt-[97px] font-[500] text-[14px]">
          <div className="w-[148px] h-[41px] text-white bg-[#FF9649] rounded-[5px]  mr-[38px]">
            <button className="flex justify-center justify-items-center px-[20px] py-[11px] ">
              <BsArrowRight className="mt-[1px] text-xl mr-2" /> Get Started
            </button>
          </div>

          <div className="w-[148px] h-[41px] text-black bg-white border  rounded-[5px]">
            <button className="flex justify-center justify-items-center px-[37px] py-[11px] ">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="border w-[35%] text-[40px] text-white grid content-center justify-center font-bold">LOGO</div>
    </div>
  );
};

export default Header;
