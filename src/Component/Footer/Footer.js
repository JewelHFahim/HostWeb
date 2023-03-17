import React from 'react';
import { IoCall } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import icon from "../../Asstets/icon.png";
import icon1 from "../../Asstets/temp/fb.svg";
import icon2 from "../../Asstets/temp/linkedin.svg";
import icon3 from "../../Asstets/temp/insta.svg";
import icon4 from "../../Asstets/temp/twitter.svg";
import "./Footer.css";


const Footer = () => {
    return (
        <div className='footer-container '>

            <div className='footer-sub-container'>

                <div>
                    <h2 className='font-[600] text-[30px]'>LOGO</h2>
                    <p className='text-[500] text-[16px] mt-[22px]'>At dolor clita amet erat takimata sed tempor <br /> invidunt lorem. Justo sea nonumy.</p>

                    <div className='footer-contact-left '>
                        <IoCall />
                        <p >+234 242 2442</p>
                    </div>

                    <div className='footer-contact-left '>
                        <AiOutlineMail />
                        <p >User@gamil.com</p>
                    </div>

                    <div className='footer-contact-left'>
                        <MdLocationOn />
                        <p >Location</p>
                    </div>

                    <div className='flex gap-[20px] mt-[40px]'>
                        <div className='footer-social-img '>
                            <img src={icon1} alt="" />
                        </div>
                        <div className='footer-social-img '>
                            <img src={icon2} alt="" />
                        </div>
                        <div className='footer-social-img '>
                            <img src={icon3} alt="" />
                        </div>
                        <div className='footer-social-img '>
                            <img src={icon4} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='font-[600] text-[30px]'>Domains</h2>


                    <div className='point-img'>
                        <img src={icon} alt="" />
                        <p >Register Domain Name</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >View Domain Pricing</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Premium Domains</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Transfer Your Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Bulk Domain Transfer </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p > Free With Every Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Name Suggestion</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Whois Lookup</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >View Promos</p>
                    </div>

                </div>


                <div>
                    <h2 className='font-[600] text-[30px]'>Hosting & Products</h2>


                    <div className=' point-img'>
                        <img src={icon} alt="" />
                        <p >Linux Hosting</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Windows Hosting</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >WordPress Hosting</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Transfer Your Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Bulk Domain Transfer </p>
                    </div>

                    <div className='point-img'>
                        <img src={icon} alt="" />
                        <p > Free With Every Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Name Suggestion</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Whois Lookup</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >View Promos</p>
                    </div>

                </div>


                <div>
                    <h2 className='font-[600] text-[30px]'>Get in Touch With Us</h2>



                    <div className="footerSearch">



                        <input type="text" placeholder='search' />
                        <div className="input-btn  search-btn">
                            <button> <BsArrowRight /></button>
                        </div>

                    </div>

                    <h2 className='font-[600] text-[30px] mt-[20px]'>Support</h2>



                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Premium Domains</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Transfer Your Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p> Bulk Domain Transfer </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p > Free With Every Domain </p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Name Suggestion</p>
                    </div>

                    <div className='point-img '>
                        <img src={icon} alt="" />
                        <p >Whois Lookup</p>
                    </div>



                </div>

            </div>

            <div className='mt-[206px]'>
                <hr />
                <div className='flex justify-between mx-[100px] py-[40px]'>
                    <p className='text-[16px] font-[500]'>Payments We Accept</p>

                    <div className='flex gap-10'>
                        <p className='text-[16px] font-[500]'>Terms of Service</p>
                        |
                        <p className='text-[16px] font-[500]'>Privacy policy</p>
                        |
                        <p classNam e='text-[16px] font-[500]'>Legal</p>
                    </div>
                </div>
                <hr />
            </div>
            <p className='text-[14px] font-[700] text-center py-[31px]'>Copyright @ 2023 Hostma. Designed with by Spruko All Rights Reserved</p>
        </div>
    );
};

export default Footer;