import React from "react";
import ServiceCard from "../../components/reuseable/ServiceCard/ServiceCard";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import ConsultantArea from "./ConsultantArea/ConsultantArea";
import DoctorSchedule from "./DoctorSchedule/DoctorSchedule";
import ServiceArea from "./ServiceArea/ServiceArea";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ConsultantArea></ConsultantArea>
      <DoctorSchedule></DoctorSchedule>
      <ServiceArea></ServiceArea>
    </div>
  );
};

export default Home;
