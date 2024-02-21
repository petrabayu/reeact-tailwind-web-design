import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full flex justify-center p-16">
        <div className="max-w-[1240px] grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className=" text-3xl md:text-4xl font-bold">
              Want tips & tricks to optimize your flow?
            </h1>
            <p className="mt-8">
              Sign up to our newsletter and stay up to date.
            </p>
            <p>
              We care bout the protection of your data. Read our{" "}
              <span className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] cursor-pointer">
                Privacy Policy.
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row  justify-center items-center mt-4 lg:mt-0 sm:space-x-4">
            <input
              type="email"
              className=" rounded-md p-4 w-full"
              placeholder="Enter your email"
            />
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] rounded-md text-white p-4 w-full sm:w-[160px] mx-auto sm:mx-0  mt-4 sm:mt-0">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
