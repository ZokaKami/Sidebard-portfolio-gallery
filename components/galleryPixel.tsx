import React, { useState } from "react";
import { galleryPixel } from "./thumbnailsPixel.js";

import { Link } from "react-router-dom";

export default function Gallery() {
  const splitImages = [galleryPixel.slice(0, 4), galleryPixel.slice(4, 8)];
  const [hover, setHover] = useState(false);
  const render = splitImages.map((group) => (
    <div className="flex flex-col gap-[20px] w-[100%] pb-4">
      {group.map((data) => (
        <Link to={`${data.alt}`}>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative overflow-hidden group"
          >
            <img
              id={data.alt}
              src={data.name}
              className="w-[100%] h-auto object-cover"
              alt={data.alt}
            />
            <div
              className="absolute pointer-events-none top-0 left-0 right-0 bottom-0 w-100% h-100% transition-all ease-in-out duration-400 opacity-0 bg-gray-600  group-hover:opacity-20"
              style={{
                clipPath: "polygon(120% -20%, 0% 130%, 0 100%, 100% 100%)",
                transition: "clip-path 0.4s",
              }}
            ></div>
            <div
              className="absolute pointer-events-none top-0 left-0 right-0 bottom-0 w-100% h-100% transition-all ease-in-out duration-600 opacity-0 bg-gray-600  group-hover:opacity-20"
              style={{
                clipPath: "polygon(0 30%, 140% 120%, 100% 100%, 0 100%)",
                transition: "clip-path 0.4s",
              }}
            ></div>
            <div className="absolute pointer-events-none w-[65px] h-[65px] border-b-[4px] border-r-[4px]   left-[-50%] top-[50%] group-hover:left-[70%] transition-all  transform -rotate-45 ease-in-out duration-300"></div>
          </div>
        </Link>
      ))}
    </div>
  ));

  return (
    <div className="lg:absolute lg:top-2 lg:left-[21%]    ">
      <div className=" px-4    lg:flex    gap-4   lg:w-[100%]     ">
        {render}
      </div>
    </div>
  );
}
