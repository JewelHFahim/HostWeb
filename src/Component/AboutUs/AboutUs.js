import React from 'react';
import { Fade } from "react-reveal";
import "./AboutUs.css";
import { BsCircleFill } from 'react-icons/bs';
import img1 from "../../Asstets/temp/Megan Peters.png";
import img2 from "../../Asstets/temp/19.svg";


const AboutUs = () => {
    return (
        <div className="font-[inter] px-[60px] mt-[90px]">

            <div className="">

                <Fade top delay={500}>
                    <div className="text-center  flex justify-center justify-items-center">
                        <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
                        <p className="font-[500] text-[15px] text-[#1B84FF]">Reviews</p>
                        <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
                    </div>
                </Fade>

                <Fade top delay={600}>
                    <h1 className="text-center text-[35px] font-[500] mt-[12px]">
                        What Do People Say <span className="text-[#1B84FF]">About Us</span>
                    </h1>
                </Fade>

                <Fade top delay={700}>
                    <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                        Client Reviews
                    </p>
                </Fade>
            </div>

            <div className='flex justify-between mt-[67px]'>
                <div className='flex items-center'>
                    <div className='w-[206px] h-[206px] rounded-full bg-[#D9D9D9] review-circle relative'>
                        <img src={img2} alt="" className='absolute top-[50px] left-[50px]' />
                    </div>
                    <div className='ml-[-150px] mt-[50px]'>
                        <p className='text-[26px] font-[500]'>Client Say About Us</p>
                        <div className='flex'>
                            <BsCircleFill className='review-slide-dot' />
                            <BsCircleFill className='review-slide-dot' />
                            <BsCircleFill className='review-slide-dot' />
                            <BsCircleFill className='review-slide-dot' />
                            <BsCircleFill className='review-slide-dot' />
                            <BsCircleFill className='review-slide-dot' />
                        </div>
                    </div>
                </div>


                <div className='w-[1202px] h-[357px] bg-[#D9EAFF] rounded-[10px] flex items-center '>

                    <div className=' flex items-center  ml-[-45px]'>

                        <Fade left delay={500}>
                            <div className='about-slider-cont'>

                                <div className='flex items-center gap-[20px]'>
                                    <div className='w-[70px] h-[70px] rounded-full bg-[#D9D9D9]'>
                                        <img src={img1} className="w-[70px]" alt="" />
                                    </div>
                                    <div className='text-white font-[500]'>
                                        <h3 className=' text-[20px] '>Megan Peters</h3>
                                        <p className='text-[16px]'>12 Aug 2022</p>
                                    </div>
                                </div>

                                <p>Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.</p>
                            </div>
                        </Fade>

                        <Fade right delay={800}>
                            <div className='about-slider-cont'>

                                <div className='flex items-center gap-[20px]'>
                                    <img src={img1} className="w-[70px]" alt="" />
                                    <div className='text-white font-[500]'>
                                        <h3 className=' text-[20px] '>Megan Peters</h3>
                                        <p className='text-[16px]'>12 Aug 2022</p>
                                    </div>
                                </div>

                                <p>Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.</p>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;