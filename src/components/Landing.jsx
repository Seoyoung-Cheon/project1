import React from "react";
import landingImg from "../assets/landing.avif";

const Landing = () => {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden h-[65vh] flex items-center justify-center relative">
        <div className="overlay w-full h-full bg-black z-10 left-0 top-0 absolute opacity-20"></div>
        <img src={landingImg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Landing;
