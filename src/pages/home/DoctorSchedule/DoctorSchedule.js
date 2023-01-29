import React from "react";
import d3 from "../../../assets/d3.png";
import "./DoctorSchedule.css";
const DoctorSchedule = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center container mx-auto mt-32">
      <div>
        <h1 className="text-3xl font-bold mb-10">Doctor's Schedule Today</h1>
        <div className="flex border-b-2 py-3 my-3">
          <p className="mr-8 text-2xl text-red-500 font-semibold">08.00</p>
          <div>
            <h2 className="text-xl">General Practitioner</h2>
            <p>Dr. Robbert Algazali</p>
          </div>
        </div>
        <div className="flex border-b-2 py-3 my-3">
          <p className="mr-8 text-2xl text-red-500 font-semibold">06.00</p>
          <div>
            <h2 className="text-xl">Dentist Specialist</h2>
            <p>Dr. Robbert Algazali</p>
          </div>
        </div>
        <div className="flex border-b-2 py-3 my-3">
          <p className="mr-8 text-2xl text-red-500 font-semibold">09.00</p>
          <div>
            <h2 className="text-xl">General Practitioner</h2>
            <p>Dr. Robbert Algazali</p>
          </div>
        </div>
        <div className="flex border-b-2 py-3 my-3">
          <p className="mr-8 text-2xl text-red-500 font-semibold">10.00</p>
          <div>
            <h2 className="text-xl">Pediatric</h2>
            <p>Dr. Robbert Algazali</p>
          </div>
        </div>
        <div className="flex border-b-2 py-3 my-3">
          <p className="mr-8 text-2xl text-red-500 font-semibold">07.00</p>
          <div>
            <h2 className="text-xl">General Practitioner</h2>
            <p>Dr. Robbert Algazali</p>
          </div>
        </div>
      </div>
      <div className="bg-img-schedule">
        <img className="w-11/12 mt-[-100px] " src={d3} alt="" />
      </div>
    </div>
  );
};

export default DoctorSchedule;
