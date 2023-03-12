import React from "react";
import BestService from "../BestService/BestService";
import Header from "../Header/Header";
import HostingPlans from "../HostingPlans/HostingPlans";
import Navbar from "../Navbar/Navbar/Navbar";
import "./Home.css";

const Home = () => {

  return (
    <div className="border border-red-600">
        <Navbar/>
        <Header/>
        <HostingPlans/>
        <BestService/>
    </div>
  );
};

export default Home;
