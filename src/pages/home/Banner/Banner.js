import React from "react";
import img1 from "../../../assets/d1.png";
import img2 from "../../../assets/d2.png";
import dot from "../../../assets/Dot Grid.png";
import dot2 from "../../../assets/Group 17.png";
import Button from "../../../components/reuseable/Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2">
        <div className="flex">
          <div>
            <div className="mr-7">
              <img src={dot2} alt="" />
            </div>
          </div>
          <div>
            <div className="w-36">
              <img src={dot} alt="" />
            </div>
            <div className="mt-7 mb-3">
              <h1 className="text-4xl font-bold">Find The Care You Need</h1>
              <p className="font-normal text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className=" w-72">
              <Button>Make Appoinments</Button>
            </div>
            <div className="flex justify-end align-bottom">
              <img src={dot} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  ">
          <div className="w-3/4 mt-28 bg-img2">
            <div className="bg-img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div>
            <div className="w-11/12 bg-img3">
              <div className="bg-img4">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
