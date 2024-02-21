import React from "react";
import singleIcon from "../assets/single.png";
import doubleIcon from "../assets/double.png";
import tripleIcon from "../assets/triple.png";

const Price = () => {
  return (
    <>
      <div className="w-full h-full bg-white text-black p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center p-4">
          Choose Your Plan
        </h1>
        <div className="max-w-[1240px] grid md:grid-cols-3 m-4 md:mx-auto gap-8">
          {/* Card 1 */}
          <div className="w-full shadow-xl flex flex-col text-center p-8   rounded-lg hover:scale-105 duration-300">
            <img src={singleIcon} alt="" className="w-24 mx-auto mb-2" />
            <h2 className=" font-bold text-3xl">Single User</h2>
            <p className="text-3xl font-semibold my-4">$149</p>
            <div className="font-semibold">
              <p className="py-2 border-b border-gray-300 ">500GB Storage</p>
              <p className="py-2 mt-2 border-b border-gray-300">
                1 User Allowed
              </p>
              <p className="py-2 mt-2 border-b border-gray-300">
                Send up to 2 GB
              </p>
            </div>
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] rounded-md text-white p-4 w-full md:w-[160px] mx-auto mt-4 ">
              Start Trial
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full shadow-xl flex flex-col text-center p-8   rounded-lg hover:scale-105 duration-300 bg-[var(--primary-color)] text-white">
            <img src={doubleIcon} alt="" className="w-24 mx-auto mb-2" />
            <h2 className=" font-bold text-3xl">Partnership</h2>
            <p className="text-3xl font-semibold my-4">$199</p>
            <div className="font-semibold">
              <p className="py-2 border-b border-gray-300 ">1 TB Storage</p>
              <p className="py-2 mt-2 border-b border-gray-300">
                3 User Allowed
              </p>
              <p className="py-2 mt-2 border-b border-gray-300">
                Send up to 10 GB
              </p>
            </div>
            <button className="bg-[var(--dark-color)] hover:bg-[var(--dark-color-hover)] rounded-md text-white p-4 w-full md:w-[160px] mx-auto mt-4 ">
              Start Trial
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-full shadow-xl flex flex-col text-center p-8   rounded-lg hover:scale-105 duration-300">
            <img src={singleIcon} alt="" className="w-24 mx-auto mb-2" />
            <h2 className=" font-bold text-3xl">Group Account</h2>
            <p className="text-3xl font-semibold my-4">$299</p>
            <div className="font-semibold">
              <p className="py-2 border-b border-gray-300 ">5 TB Storage</p>
              <p className="py-2 mt-2 border-b border-gray-300">
                10 User Allowed
              </p>
              <p className="py-2 mt-2 border-b border-gray-300">
                Send up to 20 GB
              </p>
            </div>
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] rounded-md text-white p-4 w-full md:w-[160px] mx-auto mt-4 ">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
