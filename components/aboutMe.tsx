import React, { useState } from "react";
import Aboutme from "./images/aboutMe.jpg";
export default function AboutMe() {
  return (
    <div className="lg:absolute lg:top-[20%]  lg:left-[31%]   ">
      <div className=" px-4    lg:flex    gap-4      h-[500px]       ">
        <div className="lg:flex">
          <img
            src={Aboutme}
            alt=""
            className="lg:w-1/3  object-center object-cover rounded-lg mt-4"
          />
          <div className="lg:w-1/2  px-4 lg:pt-4">
            <h1 className="text-[28px] py-4">Zeljka Dobras</h1>
            <p className="text-[18px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
