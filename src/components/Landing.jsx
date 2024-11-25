import React from "react";
import landingImg from "../assets/landing.avif";

const Landing = () => {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden h-[65vh] flex items-center justify-center relative">
        <div className="overlay w-full h-full bg-black z-10 left-0 top-0 absolute opacity-20"></div>
        <img src={landingImg} alt="" className="w-full" />
        <div className="pop w-40 h-40 bg-white z-20 absolute flex items-center justify-center shadow-lg">
          Pop Box
        </div>
      </div>
    </div>
  );
};

export default Landing;
