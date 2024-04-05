import React from "react";
import Frog from "../images/frog.jpg";

export default function BorzoiPage() {
  return (
    <div className="lg:absolute lg:top-2 lg:left-[21%] ">
      <div className=" px-4 pb-2  lg:flex  justify-center items-center  gap-4   lg:w-[100%]     ">
        <img src={Frog} alt="" />
      </div>
    </div>
  );
}
