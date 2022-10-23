import React from "react";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import "./TheatresMap.scss";

export default function SimpleMap() {
  return (
    <>
      <div className="map-image">
        <GreyContainer>
          <img src={require("./assets/map.png")} alt="map" />
          {/**да говорим със Слави за картата - 
    "@types/google-map-react": "^2.1.7",
    "google-map-react": "^2.2.0", */}
        </GreyContainer>
      </div>
    </>
  );
}
