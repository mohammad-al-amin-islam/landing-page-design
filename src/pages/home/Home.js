import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import AchievementArea from "./AchivementArea/AchievementArea";
import Banner from "./Banner/Banner";
import ConsultantArea from "./ConsultantArea/ConsultantArea";
import DoctorSchedule from "./DoctorSchedule/DoctorSchedule";
import Event from "./Event/Event";
import FeedbackArea from "./FeedbackArea/FeedbackArea";
import ServiceArea from "./ServiceArea/ServiceArea";
import SubscribeArea from "./SubscribeArea/SubscribeArea";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ConsultantArea></ConsultantArea>
      <DoctorSchedule></DoctorSchedule>
      <ServiceArea></ServiceArea>
      <AchievementArea></AchievementArea>
      <FeedbackArea></FeedbackArea>
      <Event></Event>
      <SubscribeArea></SubscribeArea>
    </div>
  );
};

export default Home;
