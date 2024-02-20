import React from "react";
import Borzoi from "./images/borzoi.jpg";
import Necro from "./images/necromanger.jpg";
import Statua from "./images/statua.jpg";
import Griffon from "./images/griffon.jpg";
import Frog from "./images/frog.jpg";
export default function Gallerypixel() {
  const galleryImages = [
    Borzoi,
    Necro,
    Statua,
    Frog,
    Griffon,
    Statua,
    Necro,
    Frog,
  ];

  const splitImages = [galleryImages.slice(0, 4), galleryImages.slice(4, 8)];

  const render = splitImages.map((group) => (
    <div className="flex flex-col gap-[20px] w-[100%]">
      {group.map((data) => (
        <img src={data} className="w-[100%] h-auto object-cover" alt="" />
      ))}
    </div>
  ));
  return (
    <div className="lg:absolute lg:top-2 lg:left-[21%] ">
      <div className=" px-4 pb-2  lg:flex    gap-4   lg:w-[100%]     ">
        {render}
      </div>
    </div>
  );
}
