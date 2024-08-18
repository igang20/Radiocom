import { Link } from "react-router-dom";
import "./main-slide.css";
import { Modal } from "@mui/material";
import { useState } from "react";
import SelectPackage from "./SelectPackage/SelectPackage";


export default function MainSlide() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <article className="main-slide">
      <div className="main-slide-content">
        <div className="main-slide-text">
          <h1>Интернет</h1>
          <h2>для вашего дома</h2>
          <div className="hr"></div>
          <div className="main-slide-btn-container">
            <button className="main-slide-connect-button" onClick={handleOpen}>
              Подключить
            </button>
            <SelectPackage open={open} onClose={handleClose} T />
            <Link to='/speedtest'>
              <button className="main-slide-connect-button">
                Проверка скорости
              </button>
            </Link>
          </div>
        </div>
        <div className="main-slide-img">
          <img src="/imgs/cloud.svg" alt="Cloud"></img>
        </div>
      </div>

    </article>
  );
}
