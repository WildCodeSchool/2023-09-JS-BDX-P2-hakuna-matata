import React, { useRef } from "react";
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
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides="true"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation="true"
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20" />
        </svg>
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
