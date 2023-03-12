import React from "react";
import "./HostingPlans.css";

const HostingPlans = () => {
  return (
    <div className="font-[inter] px-[100px]">
      <div>
        <div className="text-center mt-[60px] flex justify-center justify-items-center">
          <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
          <p className="font-[500] text-[15px] text-[#1B84FF]">Features</p>
          <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
        </div>

        <h1 className="text-center text-[35px] font-[500] mt-[12px]">
          Web Hosting <span className="text-[#1B84FF]">Plans</span>
        </h1>

        <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
          Choose Correct Plan For Your Business
        </p>
      </div>

      <div className="mt-[70px] flex">

        <div className="border border-[#8F8F8F] w-[546px] h-[382px] rounded-[20px] bg-[#FFFFFF] mr-[41px]">
          <h1 className="text-[30px] font-[500] text-center mt-[40px]">Shared Hosting</h1>

          <div className="ml-[30px] mt-[65px]">
          <p className="text-[#8F8F8F] text-[14px] font-[500]">Starts at</p>
          <h2 className="text-[30px] font-[500]">
            $8.00 <span className="text-[#8F8F8F] text-[14px]">/ month</span>
          </h2>
          <p className="text-[#8F8F8F] text-[16px] mt-[15px]">
            Magna Dolore elitr ut et labore stet dolor tempor at ipsum, amet
            quis nostrum exercutationem
          </p>
          <div className="w-[148px] h-[41px] bg-[#1B84FF] rounded-[5px] mt-[30px]">
          <button className="text-[13px] font-[600] px-[18px] my-[12px] text-white">Get Started Now</button>
          </div>
          </div>

        </div>

        <div className="border border-[#8F8F8F] w-[546px] h-[382px] rounded-[20px] bg-[#FFFFFF] mr-[41px]">
          <h1 className="text-[30px] font-[500] text-center mt-[40px]">Multidomain Hosting</h1>

          <div className="ml-[30px] mt-[65px]">
          <p className="text-[#8F8F8F] text-[14px] font-[500]">Starts at</p>
          <h2 className="text-[30px] font-[500]">
            $8.00 <span className="text-[#8F8F8F] text-[14px]">/ month</span>
          </h2>
          <p className="text-[#8F8F8F] text-[16px] mt-[15px]">
            Magna Dolore elitr ut et labore stet dolor tempor at ipsum, amet
            quis nostrum exercutationem
          </p>
          <div className="w-[148px] h-[41px] bg-[#1B84FF] rounded-[5px] mt-[30px]">
          <button className="text-[13px] font-[600] px-[18px] my-[12px] text-white">Get Started Now</button>
          </div>
          </div>

        </div>

        <div className="border border-[#8F8F8F] w-[546px] h-[382px] rounded-[20px] bg-[#FFFFFF]">
          <h1 className="text-[30px] font-[500] text-center mt-[40px]">Cloud Hosting</h1>

          <div className="ml-[30px] mt-[65px]">
          <p className="text-[#8F8F8F] text-[14px] font-[500]">Starts at</p>
          <h2 className="text-[30px] font-[500]">
            $8.00 <span className="text-[#8F8F8F] text-[14px]">/ month</span>
          </h2>
          <p className="text-[#8F8F8F] text-[16px] mt-[15px]">
            Magna Dolore elitr ut et labore stet dolor tempor at ipsum, amet
            quis nostrum exercutationem
          </p>
          <div className="w-[148px] h-[41px] bg-[#1B84FF] rounded-[5px] mt-[30px]">
          <button className="text-[13px] font-[600] px-[18px] my-[12px] text-white">Get Started Now</button>
          </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HostingPlans;
