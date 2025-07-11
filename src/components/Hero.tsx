import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-8 bg-[{hero}] h-[88vh] p-4"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#2773a6] opacity-50 z-0"></div>
      <h1 className="font-bold text-8xl text-center text-neutral-50 z-10">
        Build Wealth. <br />
        Lead with Purpose. <br />
        Live Fully Aligned.
      </h1>
      <p className="text-xl text-center text-neutral-50 z-10">
        Financial guidance and business mentorship rooted in core values.
      </p>
      <button className="bg-[#2773a6] hover:bg-[#28679a] hover:cursor-pointer py-3 px-8 z-10">
        <p className="text-center text-base text-neutral-50 ">Let's Connect</p>
      </button>
    </div>
  );
}

export default Hero;
