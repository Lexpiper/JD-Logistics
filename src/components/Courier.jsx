import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";

const Courier = () => {
  return (
    <div data-aos="fade-up" className="bg-primary h-full w-full pb-10">
      <div
        className={`${layout.spacing} text-black pt-10 w-full flex items-center flex-col md:flex-row gap-5`}
      >
        <div className="flex flex-col p-4">
          <h1 className="text-2xl font-semibold">Why Choose Our Courier Service</h1>
          <p className="py-4 text-base font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            labore, quaerat est repellat, ullam ipsum nisi exercitationem
            maiores harum saepe cupiditate vel molestias illum sint sequi?
            Explicabo dolore et enim.
          </p>
          <Button
            bg={"bg-white"}
            text={"contact us"}
            textCol={"text-primary"}
            weight={"font-bold"}
          />
        </div>
        
          <img
            src="https://media.istockphoto.com/id/1448579740/photo/african-american-woman-signs-for-packages-ms-horizontal.jpg?b=1&s=170667a&w=0&k=20&c=exYBEJC2DajoCAA98eLNFTXiD2exHfb16aovXubyn_Q="
            alt="img"
            className="object-contain h-full w-full"
          />
      
      </div>
    </div>
  );
};

export default Courier;
