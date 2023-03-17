import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Benifits from '../Benifits/Benifits';
import BestService from '../BestService/BestService';
import Blog from '../Blog/Blog';
import BuildEasy from '../BuildEasy/BuildEasy';
import DomainPrice from '../DomainPrice/DomainPrice';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HostingPlans from '../HostingPlans/HostingPlans';
import Navbar from '../Navbar/Navbar/Navbar';
import Statistics from '../Statistics/Statistics';
import TechSupport from '../TechSupport/TechSupport';
import "./Home.css"

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <Header/>
            <HostingPlans/>{/* CSS Done*/ }
            <BestService/> {/* Changed Some CSS */}
            <BuildEasy/> {/* Changed Some CSS */}
            <DomainPrice/>
            <Benifits/>
            <Statistics/>
            <Blog/>
            <TechSupport/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;