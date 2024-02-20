import React, { useState } from "react";
import Borzoi from "./images/borzoi.jpg";
import Necro from "./images/necromanger.jpg";
import Statua from "./images/statua.jpg";
import Griffon from "./images/griffon.jpg";
import Frog from "./images/frog.jpg";

import BorzoiPage from "./processPages/borzoiPage.tsx";
import FrogPage from "./processPages/frogPage.tsx";

export default function Gallery() {
  const galleryImages = [
    {
      name: Borzoi,
      alt: "Borzoi",
    },
    {
      name: Necro,
      alt: "Necro",
    },
    {
      name: Statua,
      alt: "Statua",
    },
    {
      name: Griffon,
      alt: "Griffon",
    },
    {
      name: Frog,
      alt: "Frog",
    },
    {
      name: Borzoi,
      alt: "Borzoi",
    },
    {
      name: Statua,
      alt: "Statua",
    },
    {
      name: Griffon,
      alt: "Griffon",
    },
    {
      name: Frog,
      alt: "Frog",
    },
  ];
  const splitImages = [
    galleryImages.slice(0, 3),
    galleryImages.slice(3, 6),
    galleryImages.slice(6, 9),
  ];
  const [changePage, setChangepage] = useState("");
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
  console.log(changePage);
  const renderComponent = () => {
    switch (changePage) {
      case "Frog":
        return <FrogPage />;
      case "Borzoi":
        return <BorzoiPage />;
      default:
        return (
          <div className="lg:absolute lg:top-2 lg:left-[21%] ">
            <div className=" px-4 pb-2  lg:flex    gap-4   lg:w-[100%]     ">
              {render}
            </div>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
}
