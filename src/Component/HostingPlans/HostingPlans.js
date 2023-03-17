import React from "react";
import "./HostingPlans.css";
import icon1 from "../../Asstets/temp/7.svg";
import icon2 from "../../Asstets/temp/8.svg";
import icon3 from "../../Asstets/temp/9.svg";
import { Fade } from "react-reveal";

const HostingPlans = () => {
  return (
    <div className="hostingplan-container">

      <div>
        
        <Fade top delay={500}>
          <div className="section-title-container">
            <div className="title-line"></div>
            <p className="section-title">Features</p>
            <div className="title-line"></div>
          </div>
        </Fade>

        <Fade top delay={600}>
          <h1 className="hostingplan-title">
            Web Hosting <span>Plans</span>
          </h1>
        </Fade>

        <Fade top delay={700}>
          <p className="hostingplan-sub-title">
            Choose Correct Plan For Your Business
          </p>
        </Fade>
      </div>

      <div className="hosting-box-container">
        <Fade right delay={500}>
          <div>
            <div className="hostingPlans">
              <h1>
                <img src={icon1} alt="" />
                Shared Hosting
              </h1>
              <div className="sub-hosting-container">
                <p className="starts"> Starts at </p>
                <h2>
                  $8.00
                  <span>/ month</span>
                </h2>
                <p className="descrip">
                  Magna Dolore elitr ut et labore stet dolor tempor at ipsum,
                  amet quis nostrum exercutationem
                </p>
                <div className="get-started-now-btn">
                  <button>Get Started Now</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right delay={600}>
          <div>
            <div className="hostingPlans">
              <h1>
                <img src={icon2} alt="" />
                Multidomain Hosting
              </h1>
              <div className="sub-hosting-container">
                <p className="starts">Starts at</p>
                <h2>
                  $8.00
                  <span>/ month</span>
                </h2>
                <p className="descrip">
                  Magna Dolore elitr ut et labore stet dolor tempor at ipsum,
                  amet quis nostrum exercutationem
                </p>
                <div className="get-started-now-btn">
                  <button>Get Started Now</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right delay={700}>
          <div>
            <div className="hostingPlans">
              <h1>
                <img src={icon3} alt="" />
                Cloud Hosting
              </h1>
              <div className="sub-hosting-container">
                <p className="starts"> Starts at </p>
                <h2>
                  $8.00 <span>/ month</span>
                </h2>
                <p className="descrip">
                  Magna Dolore elitr ut et labore stet dolor tempor at ipsum,
                  amet quis nostrum exercutationem
                </p>
                <div className="get-started-now-btn">
                  <button>Get Started Now</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HostingPlans;
