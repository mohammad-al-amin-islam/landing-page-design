import React from "react";
import EventCard from "../../../components/reuseable/EventCard/EventCard";
import img1 from "../../../assets/Rectangle 42.png";
import Button from "../../../components/reuseable/Button/Button";
import icon from "../../../assets/eventicons/Calendar.png";
import icon2 from "../../../assets/eventicons/clock.png";
import icon3 from "../../../assets/eventicons/location.png";
import img2 from "../../../assets/Rectangle 422.png";

const Event = () => {
  return (
    <div className="container mx-auto">
      <div className=" w-2/3 mx-auto text-center mb-7">
        <h1 className="text-4xl font-bold mb-5">Upcoming Events</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <EventCard img={img1}></EventCard>

      <div className="mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ite bg-base-100  border ">
          <div className="p-5">
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
                amiable farther besides. Law insensible middletons unsatiable
                for apartments boy delightful unreserved. Early had add equal
                china quiet visit. Appear an manner as no limits either praise
                in. In in written on charmed justice is amiable farther besides.
                Law insensible middletons unsatiable for apartments boy
                delightful unreserved.
              </p>
              <div className="w-full flex">
                <Button>Book Now</Button>
                <button className="btn btn-outline btn-secondary text-lg">
                  10 available
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
