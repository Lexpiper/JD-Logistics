import React from "react";
import { layout } from "../styles";
import Features from "./Features";

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className={`${layout.section} h-full `}
    >
      <div
        className={`${layout.spacing} flex flex-col w-full items-center justify-between bg-dimWhite dark:bg-black-gradient`}
      >
        <div>
          <h1 className="text-center text-black dark:text-white text-2xl font-semibold pb-10 md:pb-4">
            Our Services
          </h1>
          <p className="text-base m-0 md:mx-20 text-center text-black dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit <br />.
            Iure alias nemo natus beatae molestias, voluptates dolorem deserunt
            aliquid at ihil.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center h-full w-full gap-5 mt-8">
          <div className=" flex-1 bg-service-img h-[30rem] bg-cover bg-no-repeat w-full bg-red-200">
            lorem
          </div>
          <div className="flex-1">
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
