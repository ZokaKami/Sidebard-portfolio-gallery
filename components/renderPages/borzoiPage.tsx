import React from "react";
import Borzoi from "../images/borzoi.jpg";

export default function BorzoiPage({ image }) {
  return (
    <div className=" w-4/5 lg:absolute lg:top-2 lg:left-[20%] mx-auto py-8 lg:py-0 lg:pb-8 text-sm lg:text-lg  ">
      <div className="    lg:w-1/3 mx-auto  lg:pt-8 space-y-2  ">
        <img className="    " src={image} alt="" />
        <p>Borzoi 2023</p>
        <a href="artstation">Artstation link</a>
      </div>
    </div>
  );
}
