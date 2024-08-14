import { Link } from "react-router-dom";
import "./footer.css";


export default function Footer() {
  return (
    <><footer>
      <div className="footer-content">
        <div className="footer-content-block">
          <h5>
            <Link href="">Услуги</Link>
          </h5>
          <h6>
            <Link href="">Способы оплаты</Link>
          </h6>
        </div>
        <div className="footer-content-block">
          <h5>
            <Link href="">Сервис и помощь</Link>
          </h5>
          <h6>
            <Link href="">Тех. поддержка</Link>
          </h6>
          <h6>
            <Link href="">Тест скорости</Link>
          </h6>
        </div>
        <div className="footer-content-block">
          <h5>
            <Link href="">О компании</Link>
          </h5>
          <h6>
            <Link href="">Новости</Link>
          </h6>
          <h6>
            <Link href="">Контакты</Link>
          </h6>
          <h6>
            <Link href="">Публичная оферта</Link>
          </h6>
        </div>
        <div className="footer-content-block">
          <h5>
            <Link href="">©2024</Link>
          </h5>
          <h6>
            <Link href="">Подключение</Link>
          </h6>
          <h6>
            <Link href="">Поддержка</Link>
          </h6>
        </div>
      </div>
    </footer></>
  );
}
