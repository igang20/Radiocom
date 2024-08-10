"use client";
import "./header.css";
import useWindowDimensions from "../useWindowDimensions/WindowDimensions";

export default function Header() {
  const dimensions = useWindowDimensions();
  return (
    <header>
      <div className="header-content">
        <img src="/imgs/logotype.svg" className="logo"></img>
        <div className="header-links">
          <a href="#">Тарифы</a>
          <a href="#">Оплата</a>
          <a href="#">Поддержка</a>
          <a href="#">О компании</a>
        </div>
      </div>
    </header>
  );
}
