import React from "react";
import { TypeAnimation } from "react-type-animation";
import img1 from "../../Asstets/temp/abs2.png";
import "./BuildEasy.css";

const BuildEasy = () => {
  return (
    <div className="buildeasy-conatiner">
      <div className="buildeasy-sub-cont">
        <h1>
          Building Website Is
          <TypeAnimation
            sequence={["Easy", 2000, "Fast", 2000, "Secure", 2000]}
            speed={10}
            wrapper="span"
            repeat={Infinity}
            className="ml-4 text-[#86BEFF]"
          />
        </h1>

        <p className="font-[600] text-[20px] text-[#86BEFF] mt-[20px]">
          Get Website Builder, Plugins, Themes, Icons and more.
        </p>

        <p className="font-[600] text-[20px] text-white mt-[102px]">
          Create your website instantly, no coding/design skills required.
          Choose from over 100 themes <br />
          or simply drag-and-drop to customize your design.
        </p>

        <div className="getStartedBtn get-started-btn">
          <button className="px-[20px] py-[11px] ">Get Started</button>
        </div>
      </div>
      <div className="buildeasy-img">
        <img src={img1} id="zio" alt="" />
      </div>
    </div>
  );
};

export default BuildEasy;
