import React from "react";

const Button = ({ text, weight, animate }) => {
  return (
    <div
      className={`${weight ? weight : "font-normal"} ${
        animate ? animate : null
      } bg-primary w-fit dark:text-white text-white px-4 py-2 rounded-md cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
