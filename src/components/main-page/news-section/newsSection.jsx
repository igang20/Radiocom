import "./NewsSection.css";
import NewsCard from "./NewsCard/NewsCard";
import { normalizeNewsDataObject, getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";


export default function NewsSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false)

  useEffect(() => {
    // const myData = getData("http:// 217.19.211.110:1337/api/news").then((res) => {
    //   if (!res) {
    //     setError(true)
    //   }
    //   else {
    //     setData(normalizeNewsDataObject(res.data));
    //   }
    // });

    setData([{ title: 'Новый сайт нашего интернет-провайдера!', date: '09/09/2024', text: 'Рады сообщить о запуске нашего нового сайта! Мы обновили дизайн и улучшили функционал, чтобы вам было удобнее пользоваться нашими услугами. Теперь на сайте вы сможете быстро узнать информацию о тарифах, подключить интернет, узнать про оплату услуг и получить оперативную поддержку. Мы учли ваши пожелания и постарались сделать сайт максимально удобным и информативным. Добро пожаловать на наш новый сайт!' }])
  }, []);

  return (
    <section className="news-section">
      <div className="news-content">
        {/* <img
          src="/imgs/BcgReferences/Newspaper.svg"
          alt="Newspaper"
          className="bcg-img2"
        /> */}
        <h1 className="news-heading">Новости компании</h1>
        <div>
          {data ? (
            <ul className="cards-section">
              {data.map((itm, index) => {
                // let CardText = itm.attributes.body[0].children[0].text;
                // if (itm.attributes.body[0].children[0].text.length > 220) {
                //   CardText =
                //     itm.attributes.body[0].children[0].text.slice(0, 220) +
                //     "...";
                // }
                let CardText = itm.text
                if (itm.text.length > 220) {
                  CardText =
                    itm.text.slice(0, 220) +
                    "...";
                }
                return (
                  <NewsCard
                    key={index}
                    title={itm.title}
                    text={CardText}
                    date={itm.date}
                    DialogText={itm.text}
                  />
                );
              })}
            </ul>
          ) : error ? <p>Список новостей пуст</p> : (<CircularProgress />)}
        </div>
      </div>
    </section>
  );
}
