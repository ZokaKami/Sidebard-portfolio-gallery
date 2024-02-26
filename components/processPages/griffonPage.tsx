import React from "react";
import Griffon from "../images/griffon.jpg";
import GriffonItem from "../images/griffon-item.jpg";
import GriffonSketch from "../images/griffon-sketch.jpg";

export default function GriffonPage() {
  return (
    <div className="w-4/5 lg:absolute lg:top-2 lg:left-[20%] mx-auto py-8 lg:py-0 lg:pb-8 text-sm lg:text-lg text-center">
      <div className="    lg:w-2/3 mx-auto  lg:pt-8   ">
        <p className=" text-bold font-extrabold text-[36px] pb-4  ">
          Burning Griffin
        </p>

        <img className="     " src={Griffon} alt="" />
        <p className="text-[18px]" href="artstation text-base">
          Burning Griffin as a personal commission for a lovely DM and his
          group.
        </p>
      </div>
      <div className="   lg:w-2/3 mx-auto  lg:pt-4  ">
        <img className=" " src={GriffonItem} alt="" />
        <p>Close up of necklace</p>
      </div>
      <div className="   lg:w-2/3 mx-auto  lg:pt-4  ">
        <img className="" src={GriffonSketch} alt="" />
        <p>Sketch process</p>
      </div>
    </div>
  );
}
