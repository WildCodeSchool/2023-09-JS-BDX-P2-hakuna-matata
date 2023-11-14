import React, { useRef } from "react";
import "./Caroussel.css";
// Import Swiper React components
/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import "swiper/css";
/* eslint-disable import/no-unresolved */

import "swiper/css/pagination";
/* eslint-disable import/no-unresolved */

import "swiper/css/navigation";

import "./swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Caroussel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const worldRegions = [
    {
      name: "Mediterranean Cuisine",
      imgUrl: "./src/assets/salade.jpg",
      description:
        "Delicious and healthy foods from the Mediterranean region, known for olive oil, fresh vegetables, and a variety of herbs and spices.",
    },
    {
      name: "Asian Cuisine",
      imgUrl: "./src/assets/sushi.jpg",
      description:
        "Diverse and flavorful foods from Asia, including Chinese, Japanese, Indian, and Southeast Asian dishes, featuring a balance of flavors and unique cooking techniques.",
    },
    {
      name: "North African Cuisine",
      imgUrl: "./src/assets/tajine.jpg",
      description:
        "Rich and aromatic foods from North Africa, combining influences from Arabic, Berber, and Mediterranean cuisines, often featuring couscous, tagines, and a mix of spices.",
    },
    {
      name: "North American Cuisine",
      imgUrl: "./src/assets/hamburger.jpg",
      description:
        "Varied and eclectic foods from North America, reflecting the cultural diversity of the continent, with influences from Native American, European, African, and Asian culinary traditions.",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {worldRegions.map((region) => (
        <SwiperSlide key={region.name}>
          <div
            className="caroussel"
            style={{
              backgroundImage: `url(${region.imgUrl})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              width: `100%`,
            }}
          >
            <div className="caroussel-text">
              <h2>{region.name}</h2>
              <p>{region.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20" />
        </svg>
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
