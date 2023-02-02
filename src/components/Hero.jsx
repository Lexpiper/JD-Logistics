import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import Stats from "./Stats";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={`${layout.section} h-screen bg-dimWhite dark:bg-black`}>
      <div className={`${layout.spacing} flex justify-center `}>
        <div className="flex-col itmes-center h-full">
          <h1 className="text-6xl md:text-4xl leading-tight  md:leading-normal lg:text-5xl lg:leading-normal dark:text-white font-extrabold pb-5 pt-20 md:pt-5 md:pb-3">
            Take the Hassles Out Of Your Delivery.
          </h1>
          <div className="text-primary text-4xl flex items-center w-fit py-3 font-extrabold bg-dimBlue p-2 rounded-md mb-12 md:mb-6">
            <p>Just Call Us</p>
            <span className="text-secondary pl-2">
              <AiFillPhone />
            </span>
          </div>

          <div className="flex items-center text-bold text-lg text-primary  ">
            <BsChevronDoubleRight className=" animate-pulse mr-3 transition-all ease-in-out duration-700" />
            <Button
              text={"Call Now"}
              weight={"font-bold"}
              animate={"animate-pulse"}
            />
            <BsChevronDoubleLeft className=" animate-pulse ml-3 transition-all ease-in-out duration-700" />
          </div>
          <div className="mt-8">
            <Stats />
          </div>
        </div>
        <div className="hidden md:flex w-full h-full overflow-hidden border bg-hero-pattern bg-no-repeat bg-cover ">
          {/* Hero image */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
