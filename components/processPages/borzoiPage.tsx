import React from "react";
import Borzoi from "../images/borzoi.jpg";

export default function BorzoiPage() {
  return (
    <div className="lg:absolute lg:top-2 lg:left-[21%] ">
      <div className=" px-4 pb-2  lg:flex    gap-4   lg:w-[100%]     ">
        <h1>hi</h1>
        <img src={Borzoi} alt="" />
      </div>
    </div>
  );
}
