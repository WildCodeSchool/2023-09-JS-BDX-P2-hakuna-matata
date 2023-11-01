import React from "react";
import Map from "../components/Map";

function Home() {
  return (
    <div className="container">
      <div className="banniere">
        <img
          className="banniere_img"
          src="./src/assets/bannière.svg"
          alt="Bannière"
        />
      </div>
      <h4>Food treck the world</h4>
      <Map />
      <h4>Weekly dishes</h4>
      <img
        className="plats"
        src="./src/assets/plats_carroussel.svg"
        alt="Plats en carrousel"
      />
    </div>
  );
}

export default Home;
