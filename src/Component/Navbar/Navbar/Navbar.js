import React from 'react';
import "./Navbar.css";
import NavContact from '../NavContact/NavContact';
import NavLogo from '../NavLogo/NavLogo';

const Navbar = () => {
    return (
        <div>
            <NavContact />
            <NavLogo />

            {/* Navbar */}
            <div className="nav-container">
                <div className="nav-sub-container">
                    <div className="nav-main">
                        <ul className="animone">
                            <li className=''><a href="#!">Home</a></li>
                            <li><a href="#!">Domains</a></li>
                            <li><a href="#!">Websites</a></li>
                            <li><a href="#!">Hosting</a></li>
                            <li><a href="#!">Email & Productivity</a></li>
                            <li><a href="#!">Security</a></li>
                            <li><a href="#!">WHMCS</a></li>
                        </ul>
                    </div>
                    
                    {/* Reg & Login Btn */}
                    <div className="reg-btn-container">
                        <div className="reg-btn">
                            <button>Register</button>
                        </div>

                        <div className="login-btn">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;