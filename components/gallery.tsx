import React from "react";
import Borzoi from "./images/borzoi.jpg";
import Necro from "./images/necromanger.jpg";
import Statua from "./images/statua.jpg";
import Griffon from "./images/griffon.jpg";
import Frog from "./images/frog.jpg";
export default function Gallery() {
  return (
    <div className="lg:absolute lg:top-2 lg:left-[21%] ">
      <div className=" px-4 pb-2  lg:flex  space-y-4 lg:space-y-0 gap-[20px]     lg:w-[100%]     ">
        <div className="flex flex-col gap-[20px] w-[100%]">
          <img src={Borzoi} className="w-[100%] h-auto object-cover" alt="" />
          <img src={Necro} className="w-[100%] h-auto object-cover" alt="" />
          <img src={Statua} className="w-[100%] h-auto object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-[20px] w-[100%]">
          <img src={Frog} className="w-[100%] h-auto object-cover" alt="" />
          <img
            src={Griffon}
            className="w-[100%] h-auto object-cover 
            "
            alt=""
          />
          <img src={Statua} className="w-[100%] h-auto object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-[20px] w-[100%]">
          <img src={Griffon} className="w-[100%] h-auto object-cover" alt="" />
          <img src={Statua} className="w-[100%] h-auto object-cover" alt="" />
          <img src={Borzoi} className="w-[100%] h-auto object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}
