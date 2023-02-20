import React from "react";

const Button = ({ text, weight, animate, bg ,textCol, hover }) => {
  return (
    <div
      className={`${weight ? weight : "font-normal"} ${hover ? hover : null} ${
        bg ? bg : "bg-primary w-fit"
      } ${animate ? animate : null} ${
        textCol ? textCol : "dark:text-white text-white"
      } px-4 py-2 rounded-md cursor-pointer w-fit`}
    >
      {text}
    </div>
  );
};

export default Button;
