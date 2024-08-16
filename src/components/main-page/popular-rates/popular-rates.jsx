"use client";
import "./popular-rates.css";
import RatesCard from "./rates-card/rates-card";
import { useState } from "react";
import * as content from "./rates-data.js";
import useWindowDimensions from "../../useWindowDimensions/WindowDimensions";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cards";

export default function PopularRates() {
  const dimensions = useWindowDimensions();
  const [bussy, setBussy] = useState(false);
  let cardsContent = content.cardsContentCommon;
  if (bussy === false) {
    cardsContent = content.cardsContentCommon;
  } else {
    cardsContent = content.cardsContentBussy;
  }
  const CardsList = cardsContent.map((cardsContent, key) => (
    <li key={key}>
      <RatesCard {...cardsContent} />
    </li>
  ));

  function bussyCards() {
    setBussy(true);
    const left = document.querySelector(".rates-btn-left");
    const right = document.querySelector(".rates-btn-right");

    right.style.backgroundColor = "#1d7ac1";
    right.style.color = "white";
    left.style.backgroundColor = "white";
    left.style.color = "black";
  }

  function commonCards() {
    setBussy(false);
    const left = document.querySelector(".rates-btn-left");
    const right = document.querySelector(".rates-btn-right");

    left.style.backgroundColor = "#1d7ac1";
    left.style.color = "white";
    right.style.color = "black";
    right.style.backgroundColor = "white";
  }

  function MobileRates() {
    const SwiperList = cardsContent.map((cardsContent, key) => (
      <li key={key}>
        <SwiperSlide key={key}>
          <RatesCard {...cardsContent} />
        </SwiperSlide>
      </li>
    ));

    return (
      <>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="ServiceSlider"
        >
          {SwiperList}
        </Swiper>
      </>
    );
  }

  console.log(dimensions.width);
  console.log(window.innerWidth);
  return (
    <section className="popular-rates">
      <div className="rates-content">
        <img
          src="/imgs/BcgReferences/Vector.svg"
          alt="router"
          className="bcg-img"
        />
        <div className="rates-heading">
          <h1 className="popular-rates-title">Tарифные планы</h1>
          <div className="rates-btn-container">
            <button
              onClick={commonCards}
              className="rates-btn rates-btn-left"
              id="l"
            >
              ДЛЯ ДОМА
            </button>
            <button
              onClick={bussyCards}
              className="rates-btn rates-btn-right"
              id="r"
            >
              ДЛЯ БИЗНЕСА
            </button>
          </div>
        </div>
        <div className="cards-container">
          {dimensions.width > 480 ? <ul>{CardsList}</ul> : <MobileRates />}
        </div>
      </div>
    </section>
  );
}
