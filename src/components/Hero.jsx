import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import Stats from "./Stats";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={`${layout.section} h-screen bg-dimWhite dark:bg-black`}>
      <div className={`${layout.spacing} flex justify-center `}>
        <div className="flex-col itmes-center">
          <h1 className="text-6xl md:text-5xl px-2 md:leading-[59px] dark:text-white font-extrabold pb-5 pt-20 md:pt-5 md:pb-3">
            Take the Hassles Out Of Your Delivery.
          </h1>
          <div className="text-primary text-4xl  w-fit py-3 font-extrabold bg-dimBlue p-2 rounded-md mb-8 md:mb-6">
            Just Call Us
          </div>

          <div className="flex items-center text-bold text-lg text-primary  ">
            <BsChevronDoubleRight className=" animate-pulse mr-3 transition-all ease-in-out duration-700" />
            <Button text={"Call Now"} weight={'font-bold'} animate={'animate-pulse'} />
            <BsChevronDoubleLeft  className=" animate-pulse ml-3 transition-all ease-in-out duration-700"/>
          </div>
          <div className="mt-8">
            <Stats />
          </div>
        </div>
        <div className="hidden md:flex w-full h-full overflow-hidden">
          <img
            src="https://cdn.w600.comps.canstockphoto.com/bicycle-delivery-logistics-courier-bike-vector-clipart_csp78171205.jpg"
            alt="hero image"
            className="object-contain justify-start"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
