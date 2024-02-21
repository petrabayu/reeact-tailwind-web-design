import React from "react";
import productImage from "../assets/laptop.jpg";
const Prodcuts = () => {
  return (
    <>
      <div className="w-full flex justify-center font-bold bg-white p-16">
        <div className="max-w-[1240px] grid md:grid-cols-2">
          <div className="">
            <img src={productImage} alt="" className="w-[500px]" />
          </div>
          <div className="text-black flex flex-col justify-center text-center md:text-left">
            <p className="text-[var(--primary-color)] text-base md:text-xl">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="text-3xl md:text-4xl py-2 font-bold">
              Manage Data Analytics Centrally
            </h1>
            <p className=" font-light my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus reiciendis quos accusamus a aspernatur earum sit,
              fugiat fugit, sapiente et doloribus adipisci consectetur
              recusandae dolores sequi ad hic, rerum facere aliquam. Facilis?
            </p>
            <button className="bg-[var(--dark-color)] hover:bg-[var(--dark-color-hover)] rounded-md text-[var(--primary-color)] p-4 w-[200px] mx-auto md:mx-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodcuts;
