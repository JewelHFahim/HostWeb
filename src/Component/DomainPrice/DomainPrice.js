import React, { useState } from "react";
import "./DomainPrice.css";
import Domainprice from "../../Data/DomainPrice";
import { Fade } from "react-reveal";

const DomainPrice = () => {

    const [IsColor, setIsColor] = useState(false);

    return (
        <div className="font-[inter] px-[100px] mt-[90px]">

            {/*Section Header */}
            <div>
                <h1 className="text-center text-[35px] font-[500]">
                    Looking for a  <span className="text-[#1B84FF]">Domain</span>
                </h1>

                <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                    Invidunt erat elitr ut accusam amet ipsum lorem
                </p>
            </div>

            {/* Search Bar */}
            <Fade left delay={1000}>
                <div className="flex justify-center mt-[104px] SearchBar">
                    <div className="flex items-center w-[1378px]  border border-[#8F8F8F] rounded-[10px] ">

                        <input className="h-[80px] w-[1300px] bg-transparent pl-[30px]" type="text" placeholder="Find your ideal domain name..." />

                        <span className="w-[142px] h-[70px] grid content-center search-btn rounded-[10px] mr-[5px]">
                            <button className="text-[18px] font-[600] text-white ">Search</button>
                        </span>
                    </div>
                </div>
            </Fade>


            {/* Price List-Box */}
            <div className="mt-[50px] flex justify-center">

                {
                    Domainprice.map((dmprice, i) =>
                        <div
                            onClick={() => setIsColor(dmprice.id)}
                            className={`border domainPrice w-[199px] h-[170px] rounded-[10px] mr-[37px] text-center shadow-lg bg-white ${IsColor === dmprice.id ? "bg-dotcom text-yellow-300" : ""}`}>

                            <h1 className={` ${IsColor === dmprice.id ? "text-white" : ""} text-[22px] font-[500] mt-[35px] text-[${dmprice.titleColor}]`}>
                                {dmprice.title}
                            </h1>

                            <p className={`${IsColor === dmprice.id ? "text-white" : ""} text-[14px] font-[400] mt-[15px] text-[${dmprice.vsb}]`}>
                                {dmprice.subTitle}
                            </p>

                            <p className={`text-[22px] font-[500] mt-[15px] text-black ${IsColor === dmprice.id ? "text-white" : ""}`}>
                                {dmprice.price}
                            </p>

                        </div>)
                }

            </div>

        </div>
    );
};

export default DomainPrice;