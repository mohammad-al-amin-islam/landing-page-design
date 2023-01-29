import React from "react";
import img from "../../../assets/Rectangle 26.png";
const ServiceCard = () => {
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <img src={img} alt="Shoes" />

        <div className=" text-center text-white bg-blue-700 py-5">
          <p className="text-lg font-medium">Orthopedic Clinic</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
