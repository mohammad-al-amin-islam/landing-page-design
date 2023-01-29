import React from "react";
import Button from "../../../components/reuseable/Button/Button";
import ServiceCard from "../../../components/reuseable/ServiceCard/ServiceCard";

const ServiceArea = () => {
  return (
    <div className="my-10 container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Our Medical Care</h1>
        <p>Service we Provide</p>
      </div>
      <div className="grid grid-cols-4 gap-10 mb-5">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
      <div className="w-80 mx-auto">
        <Button>LOAD MORE DEPARTMENTS</Button>
      </div>
    </div>
  );
};

export default ServiceArea;
