import React from "react";
import { useParams } from "react-router-dom";
import LunafonSubGallery from "../LunafonSubGallery.js";
function RenderPage() {
  let { userId } = useParams();
  console.log(userId);
  const valueName = userId;
  const assetNames = Object.values(LunafonSubGallery[valueName]).map(
    (asset) => asset.name
  );
  const assetDescription = Object.values(LunafonSubGallery[valueName]).map(
    (asset) => asset.description
  );

  return (
    <div className="w-full px-4 lg:px-0 lg:w-4/5 lg:absolute lg:top-2 lg:left-[20%] mx-auto py-8 lg:py-0 lg:pb-8 text-sm lg:text-lg text-center">
      <div className="    lg:w-2/3 mx-auto  lg:pt-8   space-y-2">
        <h1 className="text-[36px]">{LunafonSubGallery[valueName].title}</h1>

        {assetDescription.map((desc, index) => (
          <div key={index}>
            {assetNames[index] && <img src={assetNames[index]} />}
            <p className="pt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RenderPage;
