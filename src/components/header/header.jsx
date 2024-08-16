"use client";
import "./header.css";

import { Link } from "react-router-dom";
import useWindowDimensions from "../useWindowDimensions/WindowDimensions";

import MobileHeader from "./mobileHeader/MobileHeader";

export default function Header() {
  const dimensions = useWindowDimensions();

  return (
    <>
      {dimensions.width > 768 ? (
        <header>
          <div className="header-content">
            <Link to="/">
              <img src="/imgs/logotype.png" className="logo" alt="logo" height={'auto'} />
            </Link>
            <div className="header-links">
              <Link to="/payment">Оплата</Link>
              <Link to="/support">Поддержка</Link>
              <Link to="/speedtest">Тест скорости</Link>
              <Link to="/about">О компании</Link>
            </div>
          </div>
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  );
}
