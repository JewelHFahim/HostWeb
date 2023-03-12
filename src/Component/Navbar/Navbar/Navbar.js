import React from "react";
import NavContact from "../NavContact/NavContact";
import NavLogo from "../NavLogo/NavLogo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <NavContact />
      <NavLogo />

      <div className="h-[90px] bg-[#1B84FF] text-white grid  content-center justify-center w-full">
        <div className="flex justify-between px-[50px] w-screen border border-white  font-[inter]">
          <div className="flex justify-center justify-items-center text-[20px] font-[400] border border-red-600">
            <ul className="flex">
              <li>Home</li>
              <li>Domains</li>
              <li>Websites</li>
              <li>Hosting</li>
              <li>Email & Productivity</li>
              <li>Security</li>
              <li>WHMCS</li>
            </ul>
          </div>

          <div className="flex justify-center justify-items-center text-[14px] font-[500] border border-red-600">
            <div className="mr-[10px] bg-[#FF9649] rounded-[5px] w-[82px] h-[38px]">
              <button className=" px-[13px] py-[10px] ">Register</button>
            </div>

            <div className="mr-[10px] border border-white rounded-[5px] w-[82px] h-[38px]">
              <button className=" px-[22px] py-[10px] ">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
