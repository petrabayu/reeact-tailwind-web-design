import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8">
        <div className="">
          <h1 className="w-full text-3xl font-bold text-[var(--primary-color)] my-4">
            REACT.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quas recusandae aut vero architecto illum dolores omnis fugiat,
            reprehenderit quibusdam, doloribus ad, earum soluta.
          </p>
          <div className="flex justify-between sm:w-2/4 my-4">
            <FaDribbbleSquare
              size={32}
              className="hover:text-[var(--primary-color)]"
            />
            <FaFacebookSquare
              size={32}
              className="hover:text-[var(--primary-color)]"
            />
            <FaGithubSquare
              size={32}
              className="hover:text-[var(--primary-color)]"
            />
            <FaInstagram
              size={32}
              className="hover:text-[var(--primary-color)]"
            />
            <FaTwitterSquare
              size={32}
              className="hover:text-[var(--primary-color)]"
            />
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-between">
          {/* Footer Information-1 */}
          <div className="">
            <h6 className="text-gray-400 text-xl">Solutions</h6>
            <ul className="text-sm py-2 cursor-pointer">
              <li className="py-2">Analytics</li>
              <li className="py-2">Marketing</li>
              <li className="py-2">Commerce</li>
              <li className="py-2">Insight</li>
            </ul>
          </div>
          {/* Footer Information-2 */}
          <div className="">
            <h6 className="text-gray-400 text-xl">Support</h6>
            <ul className="text-sm py-2 cursor-pointer">
              <li className="py-2">Pricing</li>
              <li className="py-2">Documentation</li>
              <li className="py-2">Guides</li>
              <li className="py-2">API Status</li>
            </ul>
          </div>
          {/* Footer Information-3 */}
          <div className="">
            <h6 className="text-gray-400 text-xl">Company</h6>
            <ul className="text-sm py-2 cursor-pointer">
              <li className="py-2">About</li>
              <li className="py-2">Blog</li>
              <li className="py-2">Jobs</li>
              <li className="py-2">Press</li>
              <li className="py-2">Careers</li>
            </ul>
          </div>
          {/* Footer Information-1 */}
          <div className="">
            <h6 className="text-gray-400 text-xl">Legal</h6>
            <ul className="text-sm py-2 cursor-pointer">
              <li className="py-2">Claim</li>
              <li className="py-2">Policy</li>
              <li className="py-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
