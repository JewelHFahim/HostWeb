import React from "react";
import "./NavContact.css";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';


const NavContact = () => {
  return (
    <div className="nav-contact-container">
      <div className="sub-contact-container">
        <div className="time-email-container">
          <p>24*7 Technical Support</p>
          <p>Jhon@gmail.com</p>
        </div>

        <div className="help-conatct-cont">
          <p className="help-btn"> <AiOutlineQuestionCircle className="qsn" /> Help</p>
          <p className="contact-btn"> <BiUser className="user" /> Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavContact;