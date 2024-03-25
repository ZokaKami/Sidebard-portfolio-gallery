import React, { useState, useEffect } from "react";
import ZeljkaPFP from "./images/ZeljkaPFP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faXTwitter,
  faArtstation,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
export default function Header({ setCount, setChangepage }) {
  //Drop down menu//
  const [openMenu, setOpenMenu] = useState(false);

  // Array for social media icons//
  const socialIcons = [
    { name: faDiscord, url: "https://www.artstation.com/dzeljka" },
    { name: faInstagram, url: "https://www.instagram.com/" },
    { name: faXTwitter, url: "https://www.x.com/" },
    { name: faArtstation, url: "https://www.artstation.com/dzeljka" },
  ];
  const socialMedia = socialIcons.map((icons) => (
    <a href={icons.url}>
      <FontAwesomeIcon
        className="lg:w-8 lg:h-8 w-6 h-6   xl:w-10 xl:h-10 rounded-full  hover:text-[#435778] transition-all ease-in-out duration-300  p-[2px]"
        icon={icons.name}
      />
    </a>
  ));

  //Reset drop down menu toggle on media query increase//
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
      <div className=" h-[98%] flex flex-col     bg-white  border-solid  border-[#021D24] rounded-2xl text-center   lg:py-8 space-y-4 lg:space-y-2">
        <ul className="     ">
          <li className=" lg:w-[130px] w-[60px] lg:mx-auto pt-2 lg:pt-0">
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

          <li className="hidden lg:block    text-[34px] font-bold  py-4  ">
            <h1>Zeljka Dobras</h1>
          </li>

          {openMenu && (
            <div className="w-full   pb-4 ">
              <button
                onClick={() => {
                  setChangepage(" ");
                  setCount("about");
                }}
                className="border-b-2 w-[100%] py-4 h-fill"
              >
                About me
              </button>
              <button
                onClick={() => {
                  setChangepage(" ");
                  setCount("home");
                }}
                className="border-b-2 w-[100%] py-4 h-fill"
              >
                Home
              </button>

              <button
                onClick={() => {
                  setCount("lunafon");
                  setChangepage(" ");
                }}
                className="border-b-2 w-[100%] py-4"
              >
                Lunafon
              </button>
              <button
                onClick={() => {
                  setCount("pixel");
                  setChangepage(" ");
                }}
                className="border-b-2 w-[100%] py-4"
              >
                Pixel
              </button>

              <button className="border-b-2 w-[100%] py-4">Placeholder</button>
            </div>
          )}
          <li
            className={`${
              !openMenu ? "absolute top-4  " : ""
            }  lg:absolute   lg:bottom-5 lg:py-4 left-[80px]   lg:left-1/2 lg:right-1/2 transition-all ease-in-out duration-300`}
          >
            <div className=" lg:flex  lg:flex-nowrap   h-full lg:justify-center     ">
              <p className="font-bold lg:hidden">Zeljka Dobras</p>
              {socialMedia}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
