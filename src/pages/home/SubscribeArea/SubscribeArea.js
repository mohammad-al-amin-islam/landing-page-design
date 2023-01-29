import React from "react";
import bg from "../../..//assets/Rectangle 44.png";
import doctor from "../../..//assets/d4.png";
const SubscribeArea = () => {
  return (
    <div className="container mx-auto mt-48">
      <div
        className="flex justify-center items-center my-7"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-140px] " src={doctor} alt="" />
        </div>
        <div className="flex-1 p-3">
          <h1 className="text-3xl text-white my-7 font-bold">Subscribe Now</h1>
          <p className="text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Your email here"
                className="input input-bordered relative w-3/4"
              />
              <button className="btn btn-warning absolute right-28">
                Submit...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeArea;
