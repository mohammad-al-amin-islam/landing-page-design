import React from "react";
import Button from "../Button/Button";

import icon from "../../../assets/eventicons/Calendar.png";
import icon2 from "../../../assets/eventicons/clock.png";
import icon3 from "../../../assets/eventicons/location.png";
const EventCard = ({ img }) => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center ite bg-base-100 border ">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              How to lead a good healthy life
            </h2>
            <div className="grid grid-cols-3 mb-4">
              <div className="flex">
                <img className="w-7" src={icon} alt="" />
                <p>15 Oct, 2019</p>
              </div>
              <div className="flex">
                <img className="w-7" src={icon2} alt="" />
                <p>8:00 AM - 5:00 PM</p>
              </div>
              <div className="flex">
                <img className="w-7" src={icon3} alt="" />
                <p>Uttara, TX 70240</p>
              </div>
            </div>
            <p className="mb-10">
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>
            <div className="w-full flex">
              <Button>Book Now</Button>
              <button className="btn btn-outline btn-secondary text-lg">
                10 available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
