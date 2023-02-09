import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";

const Courier = () => {
  return (
    <div className="bg-primary h-full w-full">
      <div
        className={`${layout.spacing} text-black pt-10 w-full flex items-center flex-col md:flex-row gap-5`}
      >
        <div className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          accusamus, nihil debitis eaque nesciunt accusantium voluptatum
          pariatur ea quos sapiente ex dignissimos aperiam, cum inventore fuga
          commodi nemo similique! Nemo?
        </div>
        <div className="flex flex-col p-4">
          <h1>Why Choose Our Courier Service</h1>
          <p className="py-4">
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
      </div>
    </div>
  );
};

export default Courier;
