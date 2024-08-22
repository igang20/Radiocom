"use client";
import "./header.css";

import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/WindowDimensions";

import MobileHeader from "./mobileHeader/MobileHeader";
import { useState } from "react";
import SelectPackage from "../main-page/main-slide/SelectPackage/SelectPackage";


export default function Header() {
  const dimensions = useWindowDimensions();
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <button className="main-slide-connect-button" onClick={handleOpen} style={{ margin: 0 }}>
                Подключить
              </button>
              <SelectPackage open={open} onClose={handleClose} />
            </div>
          </div>
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  );
}
