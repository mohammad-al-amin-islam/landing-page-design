import React from "react";
import bgImg from "../../../assets/Rectangle 40.png";
import avator from "../../../assets/Ellipse 7.png";
import "./Feedback.css";
const FeedbackArea = () => {
  return (
    <div className="mb-10">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-img-feedback"
        >
          <div className="absolute top-8 left-28 right-28">
            <h1 className="text-4xl font-bold text-white text-center mb-10">
              Patient FeedBack
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
              <img src={avator} alt="" />
              <div>
                <p className="text-white mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>

                <h1 className="font-bold text-white">Tom Cooper</h1>
                <p className="text-slate-300">Managing Director of Art</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bgImg} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackArea;
