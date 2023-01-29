import React, { useEffect, useState } from "react";
import Button from "../../../components/reuseable/Button/Button";
import ServiceCard from "../../../components/reuseable/ServiceCard/ServiceCard";
import img from "../../../assets/Rectangle 26.png";
const ServiceArea = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="my-10 container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Our Medical Care</h1>
        <p className="font-semibold">Service we Provide</p>
      </div>
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-10 mb-5 justify-items-center">
        {service.map((ser) => (
          <ServiceCard img={ser.img} para={ser.text}></ServiceCard>
        ))}
      </div>
      <div className="w-80 mx-auto">
        <Button>LOAD MORE DEPARTMENTS</Button>
      </div>
    </div>
  );
};

export default ServiceArea;
