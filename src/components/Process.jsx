import React from "react";
import { layout } from "../styles";

import { GiBoxUnpacking } from "react-icons/gi";
import { MdOutlineMonitor } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";

const Process = () => {
  return (
    <div className={`${layout.section} h-50 md:h-40 bg-black-gradient`}>
      <div className={`${layout.spacing} flex flex-col items-center md:flex-row `}>
        <div className="text-white dark:text-white flex-[1]">
          <h1 className="text-2xl font-bold pb-5">Our working process</h1>
        </div>
        <div className="flex gap-8 items-center flex-[2] justify-around">
          { Array.from(Array(4)).map((_,i) => (

            <div className="flex flex-col gap-4">
              <div className="text-3xl p-3 flex items-center justify-center bg-primary w-15 h-15 rounded-full">
                <MdOutlineMonitor />
              </div>
              <span className="text-white ">Booking</span>
            </div>
          ))
          }
          {/* <div>
            <span>
              <MdOutlineMonitor />
            </span>
            <span>Packing</span>
          </div>
          <div>
            <span>
              <MdOutlineMonitor />
            </span>
            <span>Transportation</span>
          </div>
          <div>
            <span>
              <MdOutlineMonitor />
            </span>
            <span>Delivery</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Process;
