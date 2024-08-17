import { Link } from "react-router-dom";
import "./main-slide.css";


export default function MainSlide() {
  return (
    <article className="main-slide">
      <div className="main-slide-content">
        <div className="main-slide-text">
          <h1>Интернет</h1>
          <h2>для вашего дома</h2>
          <div className="hr"></div>
          <div className="main-slide-btn-container">
            <button className="main-slide-connect-button">
              Подключить
            </button>
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
