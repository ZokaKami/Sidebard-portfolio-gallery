import React from "react";
import Griffon from "../images/griffon.jpg";
import GriffonItem from "../images/griffon-item.jpg";
import GriffonSketch from "../images/griffon-sketch.jpg";
import text from "../test.js";

export default function GriffonPage(valueName) {
  const assetNames = Object.values(text[valueName.valueName]).map(
    (asset) => asset.name
  );

  return (
    <div className="w-4/5 lg:absolute lg:top-2 lg:left-[20%] mx-auto py-8 lg:py-0 lg:pb-8 text-sm lg:text-lg text-center">
      <div className="    lg:w-2/3 mx-auto  lg:pt-8   space-y-4">
        {assetNames.map((name, index) => (
          <img key={index} src={name} />
        ))}
      </div>
    </div>
  );
}
