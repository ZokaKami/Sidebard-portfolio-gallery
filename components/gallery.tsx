import React from "react";
import Borzoi from "./images/borzoi.jpg";
import Necro from "./images/necromanger.jpg";
import Statua from "./images/statua.jpg";
import Griffon from "./images/griffon.jpg";
import Frog from "./images/frog.jpg";
export default function Gallery() {
  return (
    <div className="px-2 pb-2  flex flex-wrap lg:flex-col lg:flex-start lg:flex  lg:absolute lg:top-[5px] lg:left-[350px]">
      <div className="lg:flex lg:flex-1">
        <img
          className="rounded-2xl object-cover h-auto lg:w-1/3  p-[4px]   lg:object-contain"
          src={Borzoi}
          alt=""
        />

        <img
          className="rounded-2xl  object-cover    h-auto lg:w-1/3  p-[4px] lg:object-cover "
          src={Necro}
          alt=""
        />

        <img
          className="rounded-2xl object-cover h-auto lg:w-1/3   p-[4px] "
          src={Frog}
          alt=""
        />
      </div>

      <div className="lg:flex lg:flex-1">
        <img
          className="rounded-2xl lg:w-1/3 object-cover  h-auto   p-[4px]"
          src={Statua}
          alt=""
        />

        <img
          className="rounded-2xl lg:w-2/3 object-cover  h-auto  object-fit object-center p-[4px]"
          src={Griffon}
          alt=""
        />
      </div>
      <div className="lg:flex lg:flex-1">
        {" "}
        <img
          className="rounded-2xl lg:w-1/3 object-cover  h-auto   p-[4px]"
          src={Statua}
          alt=""
        />
        <img
          className="rounded-2xl lg:w-1/3 object-cover  h-auto  object-fit object-center p-[4px]"
          src={Statua}
          alt=""
        />
        <img
          className="rounded-2xl lg:w-1/3 object-cover   h-auto p-[4px] "
          src={Frog}
          alt=""
        />
      </div>
    </div>
  );
}
