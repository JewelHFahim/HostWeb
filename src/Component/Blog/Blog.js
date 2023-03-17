import React from "react";
import img1 from "../../Asstets/temp/img1.png";
import img2 from "../../Asstets/temp/img2.png";
import img3 from "../../Asstets/temp/img3.png";
import img4 from "../../Asstets/temp/Megan Peters.png";
import img5 from "../../Asstets/temp/18.svg";
import Slider from "react-slick";
import "./Blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Blog = () => {

    var settings = {

        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="font-[inter]  mt-[90px]">

            <div className="mt-[60px]">
                <div className="text-center  flex justify-center justify-items-center">
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
                    <p className="font-[500] text-[15px] text-[#1B84FF]">Our Blog</p>
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
                </div>

                <h1 className="text-center text-[35px] font-[500] mt-[12px]">
                    Our Latest <span className="text-[#1B84FF]">Blog</span>
                </h1>

                <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                </p>
            </div>


            <div className="font-[inter] px-[100px] mt-[50px] sliderImg">


                <Slider {...settings}>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className="title-btn bg-[#FF9649]">
                                <button >Hosting</button>
                            </div>

                            <h1>Starting a Web Hosting Business</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>
                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img2} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className=" title-btn bg-[#86BEFF]">
                                <button >Email</button>
                            </div>

                            <h1>Email Hosting For Your Projects</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>
                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className="title-btn bg-[#44D464]">
                                <button >Cloud</button>
                            </div>

                            <h1>Cloud Hosting Growing Faster</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>

                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className="title-btn bg-[#FF9649]">
                                <button >Hosting</button>
                            </div>

                            <h1>Starting a Web Hosting Business</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>
                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img2} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className="title-btn bg-[#86BEFF]">
                                <button >Email</button>
                            </div>

                            <h1>Email Hosting For Your Projects</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>
                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-box border shadow-lg">
                        <div className="slider-box-img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="pl-[45px] pr-[30px] relative">
                            <div className="title-btn  bg-[#44D464]">
                                <button >Cloud</button>
                            </div>

                            <h1>Cloud Hosting Growing Faster</h1>
                            <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[20px]">To take a trivial example, which of us ever undertakes
                                laborious physical exerciser , except to obtain some
                                advantage from it...
                            </p>
                            <div className="mt-[30px] flex justify-between justify-items-center">
                                <div className="flex justify-items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="ml-[30px] font-[500]">
                                        <h3 className="text-[20px] ">Megan Peters</h3>
                                        <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                    </div>
                                </div>
                                <div className="slider-author-img">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>

            </div>

        </div>
    );
};

export default Blog;