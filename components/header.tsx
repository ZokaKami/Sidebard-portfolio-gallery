import React, { useState, useEffect } from "react";
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
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(window.innerWidth > 1024);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Initialize the state based on the initial window width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" px-[10px] py-[8px] h-[100%] lg:bg-[#021D24] lg:w-[20%]   lg:fixed  lg:top-0 lg:left-0  box-content">
      <div className=" h-[98%] flex flex-col     bg-white  border-solid  border-[#021D24] rounded-2xl text-center p-2 lg:p-8 space-y-4 lg:space-y-2">
        <ul className="     ">
          <li className=" lg:w-[130px] w-[60px] lg:mx-auto">
            <img src={ZeljkaPFP} className="rounded-full" alt="" />
          </li>
          <li className="absolute right-3 top-4 lg:hidden">
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              className="p-4"
            >
              |||
            </button>
          </li>

          <li className="hidden lg:block    text-[34px] font-bold    ">
            <h1>Zeljka Dobras</h1>
          </li>

          {openMenu && (
            <li className="    lg:block  justify-around max-w-[600px] mx-auto  text-[16px]    ">
              <div className="space-y-2">
                <p>Placeholder</p>
                <p>Content creator</p>
                <p>Placeholder</p>

                <p>Pixel art</p>
                <p>Content creator</p>
                <p>Placeholder</p>
              </div>
            </li>
          )}
          <li
            className={`${
              !openMenu ? "absolute top-7" : ""
            }  lg:absolute   lg:bottom-5 lg:py-4 left-1/2 right-1/2 transition-all ease-in-out duration-300`}
          >
            <div className="flex  lg:flex-nowrap   h-full justify-center     ">
              <a href=" ">
                <FontAwesomeIcon
                  className="w-8 h-8 xl:w-10 xl:h-10 rounded-full  hover:text-[#435778] transition-all ease-in-out duration-300 "
                  icon={faArtstation}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="w-8 h-8 xl:w-10 xl:h-10 px-[4px]  rounded-full  hover:text-[#435778]  transition-all ease-in-out duration-300"
                  icon={faXTwitter}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="w-8 h-8 xl:w-10 xl:h-10 px-[4px]  rounded-full hover:text-[#435778] transition-all ease-in-out duration-300 "
                  icon={faInstagram}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="w-8 h-8 xl:w-10 xl:h-10 px-[4px]  rounded-full hover:text-[#435778] transition-all ease-in-out duration-300"
                  icon={faDiscord}
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
