import React from "react";
import Borzoi from "./images/borzoi.jpg";
import Necro from "./images/necromanger.jpg";
import Statua from "./images/statua.jpg";
import Griffon from "./images/griffon.jpg";
import Frog from "./images/frog.jpg";
export default function Comissions() {
  const galleryImages = [
    Borzoi,
    Necro,
    Statua,
    Griffon,
    Frog,
    Necro,
    Borzoi,
    Statua,
    Frog,
    Necro,
    Griffon,
    Statua,
  ];
  const splitImages = [
    galleryImages.slice(0, 3),
    galleryImages.slice(3, 6),
    galleryImages.slice(6, 9),
    galleryImages.slice(9, 12),
  ];

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
