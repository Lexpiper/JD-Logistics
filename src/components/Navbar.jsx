import React from "react";
import { useState } from "react";
import { brand, close, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-full bg-[#eee]">
      <div className="w-[90%] mx-auto h-16  flex items-center justify-between p-2">
        <div className="">
          <img src={brand} alt="brand" className="w-12 h-12" />
        </div>
        <div className="md:hidden">
          <img
            src={toggle ? close : menu}
            alt="icon"
            className="w-10 h-10 bg-black"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flez"
            } dark:bg-black-gradient dark:text-primary bg-white z-30 p-4 absolute top-16 right-0 my-2 w-full min-h-[50vh]  sidebar`}
          >
            <ul className="flex flex-col pl-8">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="text-xl dark:text-primary font-semibold font-mont mb-5 md:mb-0"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="hidden md:flex items-center font-mont pl-6">
          {navLinks.map((nav) => (
            <li
              className="text-secondary pl-4 cursor-pointer text-base font-semibold"
              key={nav.id}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
