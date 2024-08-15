"use client";
import "./header.css";

import { Link } from "react-router-dom";
import useWindowDimensions from "../useWindowDimensions/WindowDimensions"

import MobileHeader from "./mobileHeader/MobileHeader";

export default function Header() {
<<<<<<< HEAD
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img src="/imgs/logotype.svg" className="logo" alt="logo" />
        </Link>
        <div className="header-links">
          <Link to="/payment">Оплата</Link>
          <Link to="/support">Поддержка</Link>
          <Link to="#">Тест скорости</Link>
          <Link to="/about">О компании</Link>
        </div>
      </div>
    </header>
=======
  const dimensions = useWindowDimensions()

  console.log(dimensions.width)
  console.log(window.innerWidth)
  return (
    <>
      {dimensions.width > 1024 ?
        <header>
          <div className="header-content">
            <Link to='/'><img src="/imgs/logotype.svg" className="logo" alt='logo' /></Link>
            <div className="header-links">
              <Link to="/payment">Оплата</Link>
              <Link to="/support">Поддержка</Link>
              <Link to="#">Тест скорости</Link>
              <Link to="/about">О компании</Link>
            </div>
          </div>
        </header >
        :
        <MobileHeader />
      }
    </>


>>>>>>> 1f3bc6764e45908ea33a4e45275620ddb3738b6f
  );
}
