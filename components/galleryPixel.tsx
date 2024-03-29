import React, { useState } from "react";

import { galleryPixel } from "./imagesPixel.js";

import RenderPixel from "./processPages/renderPixel.tsx";

export default function Gallery({ changePage, setChangepage }) {
  const splitImages = [galleryPixel.slice(0, 4), galleryPixel.slice(4, 8)];

  const render = splitImages.map((group) => (
    <div className="flex flex-col gap-[20px] w-[100%] pb-4">
      {group.map((data) => (
        <div className=" ">
          <img
            onClick={() => setChangepage(data.alt)}
            id={data.alt}
            src={data.name}
            className="w-[100%] h-auto object-cover"
            alt={data.alt}
          />
        </div>
      ))}
    </div>
  ));

  const renderComponent = () => {
    if (changePage === " ") {
      return (
        <div className="lg:absolute lg:top-2 lg:left-[21%]    ">
          <div className=" px-4    lg:flex    gap-4   lg:w-[100%]     ">
            {render}
          </div>
        </div>
      );
    } else {
      return <RenderPixel valueName={changePage} />;
    }
  };

  return <div>{renderComponent()}</div>;
}
