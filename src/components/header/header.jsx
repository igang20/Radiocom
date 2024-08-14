"use client";
import "./header.css";

import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <div className="header-content">
        <Link to='/'><img src="/imgs/logotype.svg" className="logo" alt='logo' /></Link>
        <div className="header-links">
          <Link to="#">Оплата</Link>
          <Link to="#">Поддержка</Link>
          <Link to="#">Тест скорости</Link>
          <Link to="/about">О компании</Link>
        </div>
      </div>
    </header>
  );
}
