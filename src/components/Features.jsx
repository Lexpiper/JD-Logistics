import React from "react";
import phone from "../assets/phone.svg";

const Features = () => {
  return (
    <div className="h-full w-full flex-col items-center ">
      {Array.from(Array(3)).map((_, i) => (
        <div className="flex items-center gap-5 mb-10 pl-10 animate__animated animate__backInRight animate__delay-.5s">
          {/* <img src={phone} alt=" phone" className="flex-1 w-14 h-14 p-2 bg-gray-300 rounded-full" /> */}
          <div className="flex-2">
            <h1 className=" text-1xl font-semibold">Mobile and ICT Equipment</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              numquam a nobis! Omnis commodi beatae ipsum ullam vero provident.
              Nulla atque exercitationem perferendis quo nisi officiis voluptate
              repellendus voluptatibus vel.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
