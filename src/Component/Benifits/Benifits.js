import React from "react";
import icon1 from "../../Asstets/temp/6.svg";
import icon2 from "../../Asstets/temp/3.svg";
import icon3 from "../../Asstets/temp/4.svg";
import icon4 from "../../Asstets/temp/2.svg";
import icon5 from "../../Asstets/temp/1.svg";
import icon6 from "../../Asstets/temp/5.svg";
import { Fade } from "react-reveal";
import "./Benifits.css"


const Benifits = () => {
    return (
        <div className="font-[inter] px-[100px] mt-[90px]">

            <div>
                <Fade top delay={500}>
                    <div className="text-center mt-[60px] flex justify-center justify-items-center">
                        <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
                        <p className="font-[500] text-[15px] text-[#1B84FF]">Benifits</p>
                        <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
                    </div>
                </Fade>

                <Fade top delay={600}>
                    <h1 className="text-center text-[35px] font-[500] mt-[12px]">
                        Free Add-Ons With Every  <span className="text-[#1B84FF]">Domain Name</span>
                    </h1>
                </Fade>

                <Fade top delay={700}>
                    <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                        Checkout Add-On Benefits
                    </p>
                </Fade>
            </div>

            <div className="mt-[70px] grid grid-cols-3 gap-[50px]">

                <Fade bottom delay={500}>
                    <div className="domain-price-box shadow-lg border">
                        <div className="sub-domain-price-box">
                            <img src={icon1} alt="" />
                            <h1>
                                Free Email Forwarding
                            </h1>
                        </div>

                        <p>
                            Amet ipsum justo no dolores lorem tempor clita elitr
                            et ut, amet aliquyam et sed invidunt at kasd accusam,
                            dolor.
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={700}>
                    <div className="domain-price-box shadow-lg border">
                        <div className="sub-domain-price-box">
                            <img src={icon2} alt="" />
                            <h1>
                                Bulk Tools
                            </h1>
                        </div>
                        <p>
                            Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque.
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={900}>
                    <div className="domain-price-box shadow-lg border">
                        <div className="sub-domain-price-box">
                            <img src={icon3} alt="" />
                            <h1>
                                DNS Management
                            </h1>
                        </div>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos.
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={1100}>
                    <div className="domain-price-box shadow-lg border">

                        <div className="sub-domain-price-box">
                            <img src={icon4} alt="" />
                            <h1>
                                Easy To Use Control Panel
                            </h1>
                        </div>

                        <p>
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem corporis suscipit laboriosam, nisi ut
                            aliquid commodi consequatur.
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={1300}>
                    <div className="domain-price-box shadow-lg border">

                        <div className="sub-domain-price-box">
                            <img src={icon5} alt="" />
                            <h1>
                                Domain Theft Protection
                            </h1>
                        </div>

                        <p>
                            Nam libero tempore, nobis est eligendi optio cumque
                            nihil impedit quo minus id quod maxime placeat
                            facere possimus, omnis voluptas est.
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={1500}>
                    <div className="domain-price-box shadow-lg border">
                        <div className="sub-domain-price-box">
                            <img src={icon6} alt="" />
                            <h1>
                                Domain Forwarding
                            </h1>
                        </div>

                        <p>
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti dolores.
                        </p>
                    </div>

                </Fade>
            </div>

        </div>
    );
};

export default Benifits;