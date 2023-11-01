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
          src="./src/assets/mapMonde.svg"
          alt="Map monde"
        />
        <button className="africa mapButton" type="button">
          <a href="/continent/africa">Africa</a>
        </button>
        <button className="america mapButton" type="button">
          <a href="/continent/africa">America</a>
        </button>
        <button className="europe mapButton" type="button">
          <a href="/continent/africa">Europe</a>
        </button>
        <button className="asia mapButton" type="button">
          <a href="/continent/africa">Mid East & Asia</a>
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
