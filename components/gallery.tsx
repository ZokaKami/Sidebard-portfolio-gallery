import React from "react";

import { imagesHome } from "./imagesHome.js";
import BorzoiPage from "./renderPages/borzoiPage.tsx";

import GriffonPage from "./renderPages/renderLunafon.tsx";

export default function Gallery({ changePage, setChangepage }) {
  const splitImages = [
    imagesHome.slice(0, 3),
    imagesHome.slice(3, 6),
    imagesHome.slice(6, 9),
  ];

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
    switch (changePage) {
      case "Griffon":
        return <GriffonPage />;
      case "Borzoi":
        return <BorzoiPage image={imagesHome[0].name} />;

      default:
        return (
          <div className="lg:absolute lg:top-2 lg:left-[21%]    ">
            <div className=" px-4    lg:flex    gap-4   lg:w-[100%]     ">
              {render}
            </div>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
}
