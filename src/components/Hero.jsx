import React from "react";
import { TypeAnimation } from "react-type-animation";
// import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <div className=" h-screen max-w-[900px] text-center mt-[-96px] mx-auto  flex flex-col justify-center font-bold ">
        <p className="text-[var(--primary-color)] py-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl py-4 md:py-6">
          Grow with data.
        </h1>
        <p className=" text-xl py-4 md:text-5xl sm:text-4xl">
          Fast, flexible financing for{" "}
          <span className="text-[var(--primary-color)]">
            <TypeAnimation
              sequence={["BTB", 2000, "SAAS", 2000, "BTC", 2000]}
              speed={10}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className=" text-gray-500 md:text-2xl text-xl px-4 ">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] rounded-lg p-4 w-[200px] text-black  mx-auto my-6">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
