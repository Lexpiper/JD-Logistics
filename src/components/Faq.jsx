import React from "react";
import { layout } from "../styles";
import { faq } from "../constants";

const Faq = () => {
  return (
    <div data-aos="fade-up" className={`${layout.section} h-full `}>
      <div
        className={`${layout.spacing} flex flex-col w-full items-center justify-between bg-dimWhite dark:bg-black-gradient`}
      >
        <h1 className="text-2xl font-semibold p-8 underline underline-offset-auto">
          Most Asked Questions About Our Company
        </h1>
        {faq.map((q) => (
          <div key={q.id} className="w-full h-full pb-10">
            <div className="flex gap-5 ">
              <img src={q.img} alt="" className="w-10 h-10 rounded-full mr-2" />
              <div>
                <h1 className="text-1xl font-semibold ">{q.ques}</h1>
                <p className="text-base  font-normal italic" >
                 {q.ans}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
