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
              <a href="#">Подключить</a>
            </button>
            <button className="main-slide-connect-button">
              <a href="#">Проверка скорости</a>
            </button>
          </div>
        </div>
        <div className="main-slide-img">
          <img src="/imgs/cloud.svg"></img>
        </div>
      </div>
    </article>
  );
}
