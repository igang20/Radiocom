import "./popular-rates.css";
import RatesCard from "./rates-card/rates-card";
import { useState } from "react";
import * as content from "./rates-data.js";

export default function PopularRates() {
  const [bussy, setBussy] = useState(false);
  let cardsContent = content.cardsContentCommon;
  if (bussy === false) {
    cardsContent = content.cardsContentCommon;
  } else {
    cardsContent = content.cardsContentBussy;
  }
  const CardsList = cardsContent.map((cardsContent) => (
    <li>
      <RatesCard
        title={cardsContent.title}
        speed={cardsContent.speed}
        img={cardsContent.img}
        price={cardsContent.price}
      />
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
  return (
    <div className="popular-rates">
      <h2 className="popular-rates-title">Популярные тарифные планы</h2>
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
      <div className="cards-container">
        <ul>{CardsList}</ul>
      </div>
    </div>
  );
}
