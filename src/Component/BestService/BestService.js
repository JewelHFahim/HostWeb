import React from "react";
import "./BestService.css";
import icon1 from "../../Asstets/temp/diamond.svg";
import icon2 from "../../Asstets/temp/data management.svg";
import icon3 from "../../Asstets/temp/data recovery.svg";
import icon4 from "../../Asstets/temp/top notch security.svg";
import { Fade } from "react-reveal";

const BestService = () => {
  return (
    <div className="font-[inter] px-[100px] mt-[90px]">
      <div>
        <Fade top delay={500}>
          <div className="section-title-container">
            <div className="title-line"></div>
            <p className="section-title">Services</p>
            <div className="title-line"></div>
          </div>
        </Fade>

        <Fade top delay={600}>
          <h1 className="text-center text-[35px] font-[500] mt-[12px]">
            Best Services You <span className="text-[#1B84FF]">Get</span>
          </h1>
        </Fade>

        <Fade top delay={700}>
          <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
            Domain & Hosting Services
          </p>
        </Fade>
      </div>

      <div className="mt-[70px] flex">
        <Fade bottom delay={500}>
          <div className="best-service-box mr-[24px] shadow-lg">
            <div className="flex justify-center mt-[25px]">
              <div className="best-service-img bg-[#FF9649]">
                <img src={icon1} alt="" />
              </div>
            </div>
            <h1>Reliability</h1>
            <p>
              Sed ut perspiciatis unde omnis natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam nemo enim.
            </p>
          </div>
        </Fade>

        <Fade bottom delay={600}>
          <div className="best-service-box mr-[24px] shadow-lg">
            <div className="flex justify-center mt-[25px]">
              <div className="best-service-img bg-[#1B84FF] ">
                <img src={icon2} alt="" />
              </div>
            </div>
            <h1>Data Management</h1>
            <p>
              Sed ut perspiciatis unde omnis natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam nemo enim.
            </p>
          </div>
        </Fade>

        <Fade bottom delay={700}>
          <div className=" best-service-box mr-[24px] shadow-lg">
            <div className="flex justify-center mt-[25px]">
              <div className="best-service-img  bg-[#44D464]">
                <img src={icon3} alt="" />
              </div>
            </div>
            <h1>Data Recovery</h1>
            <p>
              Sed ut perspiciatis unde omnis natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam nemo enim.
            </p>
          </div>
        </Fade>

        <Fade bottom delay={900}>
          <div className="best-service-box shadow-lg">
            <div className="flex justify-center mt-[25px]">
              <div className="best-service-img  bg-[#F25858]">
                <img src={icon4} alt="" />
              </div>
            </div>

            <h1>Top Notch Securirty</h1>

            <p>
              Sed ut perspiciatis unde omnis natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam nemo enim.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BestService;
