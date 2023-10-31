import React from "react";

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
      <div className="map">
        <img
          className="monde"
          src="./src/assets/mondeMap.svg"
          alt="Map monde"
        />
        <button className="mapButton" type="button">
          <a href="/continent/africa">Africa</a>
        </button>
      </div>
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
