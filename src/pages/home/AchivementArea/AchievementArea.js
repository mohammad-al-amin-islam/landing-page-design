import React from "react";
import icon1 from "../../../assets/icons/Vector.png";
import icon2 from "../../../assets/icons/bed.png";
import icon3 from "../../../assets/icons/award.png";
import icon4 from "../../../assets/icons/smile.png";
import "./AchievementArea.css";
const AchievementArea = () => {
  return (
    <div className="bg-img-achievement py-10 mb-10">
      <div className=" container mx-auto grid grid-cols-4">
        <div className="my-7 text-center w-52">
          <div className="flex justify-center mt-1  p-3">
            <img className="w-20" src={icon1} alt="" />
          </div>
          <div>
            <h1 className="text-6xl text-white border-b-4 font-bold mb-3 p-5">
              50
            </h1>
            <p className="text-2xl text-white font-bold">Medical Expert</p>
          </div>
        </div>
        <div className="my-7 text-center w-52">
          <div className="flex justify-center mt-8 mb-3 p-3">
            <img className="w-20" src={icon2} alt="" />
          </div>
          <div>
            <h1 className="text-6xl text-white border-b-4 font-bold mb-3 p-5">
              500
            </h1>
            <p className="text-2xl text-white font-bold">Hospital Rooms</p>
          </div>
        </div>
        <div className="my-7 text-center w-52">
          <div className="flex justify-center my-2 p-3">
            <img className="w-20" src={icon3} alt="" />
          </div>
          <div>
            <h1 className="text-6xl text-white border-b-4 font-bold mb-3 p-5">
              20
            </h1>
            <p className="text-2xl text-white font-bold">Awwwards Win</p>
          </div>
        </div>
        <div className="my-7 text-center w-52">
          <div className="flex justify-center my-2 p-3">
            <img className="w-20" src={icon4} alt="" />
          </div>
          <div>
            <h1 className="text-6xl text-white border-b-4 font-bold mb-3 p-5">
              5000
            </h1>
            <p className="text-2xl text-white font-bold">Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementArea;
