import React from "react";
import ZeljkaPFP from "./images/ZeljkaPFP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faXTwitter,
  faArtstation,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  return (
    <div className="p-[10px]    bg-[#021D24] lg:w-[350px] lg:max-w-[400px] lg:fixed  lg:top-0 lg:left-0  ">
      <div className="h-[98vh]     bg-white  border-solid  border-[#021D24] rounded-2xl text-center  p-8 space-y-4 lg:space-y-2">
        <div className="w-[130px] lg:w-[150px]  rounded-full flex mx-auto ">
          <img src={ZeljkaPFP} className="rounded-full" alt="" />
        </div>
        <div className="text-[40px] lg:text-[34px] font-bold">
          <h1>Zeljka Dobras</h1>
        </div>
        <div className="flex flex-wrap justify-around max-w-[600px] mx-auto  text-[16px]  ">
          <div>
            <p>Placeholder</p>
            <p>Content creator</p>
            <p>Placeholder</p>
          </div>
          <div>
            <p>Pixel art</p>
            <p>Content creator</p>
            <p>Placeholder</p>
          </div>
        </div>
        <div className=" w-fit mx-auto py-8 ">
          <button className="py-2 px-8 mx-auto text-[40px] lg:text-[28px] border-4 border-[#021D24] hover:border-[#435778] hover:text-[#435778] rounded-full font-semibold  transition-all ease-in-out duration-300">
            Gallery
          </button>
        </div>
        <div className="lg:absolute lg:bottom-5 lg:left-1/2 lg:right-1/2">
          <div className="flex flex-wrap lg:flex-nowrap flex-1 h-full justify-center    lg: ">
            <a href="" className="w-10 h-10 border-none">
              <FontAwesomeIcon
                className="w-10 h-10  rounded-full  hover:text-[#435778]  "
                icon={faArtstation}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="w-10 h-10 px-[4px]  rounded-full  hover:text-[#435778]  "
                icon={faXTwitter}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="w-10 h-10 px-[4px]  rounded-full hover:text-[#435778] "
                icon={faInstagram}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="w-10 h-10 px-[4px]  rounded-full hover:text-[#435778] "
                icon={faDiscord}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="w-10 h-10 px-[4px]  rounded-full hover:text-[#435778] "
                icon={faFacebook}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
