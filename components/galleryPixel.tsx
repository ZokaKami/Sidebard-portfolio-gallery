import React, { useState } from "react";

import galleryLunafon from "./imagesLunafon.js";
import BorzoiPage from "./processPages/borzoiPage.tsx";

import GriffonPage from "./processPages/griffonPage.tsx";

export default function Gallery({ changePage, setChangepage }) {
  const splitImages = [galleryLunafon.slice(0, 3), galleryLunafon.slice(3, 8)];

  const render = splitImages.map((group) => (
    <div className="flex flex-col gap-[20px] w-[100%]">
      {group.map((data) => (
        <div>
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
    switch (changePage) {
      case "Griffon":
        return <GriffonPage />;
      case "Borzoi":
        return <BorzoiPage image={galleryLunafon[0].name} />;

      default:
        return (
          <div className="lg:absolute lg:top-2 lg:left-[21%]  ">
            <div className=" px-4 pb-2  lg:flex    gap-4   lg:w-[100%]     ">
              {render}
            </div>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
}
