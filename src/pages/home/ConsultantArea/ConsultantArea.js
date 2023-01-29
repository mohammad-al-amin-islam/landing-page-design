import React from "react";
import dr from "../../../assets/d1.png";
import vect from "../../../assets/Vector.png";
import "./ConsultanArea.css";

const ConsultantArea = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center mt-8">
      <div className="w-96 ">
        <div className="bg-img-consultant">
          <img className="w-72 m-auto" src={dr} alt="" />
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl leading-[46px] font-bold mb-10">
          Sick Kid? How to Deal with a <br /> Child’s Fever: 4 Steps
        </h1>
        <ul className="">
          <li className="flex mb-4">
            <img className="mr-5" src={vect} alt="" />
            Cras sit sed nec a nunc
          </li>
          <li className="flex mb-4 ">
            <img className="mr-5" src={vect} alt="" />
            Tempor mauris mauris in
          </li>
          <li className="flex mb-4">
            <img className="mr-5" src={vect} alt="" />
            Nibh turpis praesent pretium
          </li>
          <li className="flex mb-4">
            <img className="mr-5" src={vect} alt="" />
            Cras sit sed nec a nunc
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConsultantArea;
