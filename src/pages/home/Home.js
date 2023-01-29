import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import ConsultantArea from "./ConsultantArea/ConsultantArea";
import DoctorSchedule from "./DoctorSchedule/DoctorSchedule";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ConsultantArea></ConsultantArea>
      <DoctorSchedule></DoctorSchedule>
    </div>
  );
};

export default Home;
