import "./NewsSection.css";
import NewsCard from "./NewsCard/NewsCard";
import { normalizeNewsDataObject, getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";


export default function NewsSection() {
  const [data, setData] = useState(null);

  let tempText = "Рады сообщить о запуске нашего нового сайта! Мы обновили дизайн и улучшили функционал, чтобы вам было удобнее пользоваться нашими услугами. Теперь на сайте вы сможете быстро узнать информацию о тарифах, подключить интернет, оплатить услуги и получить оперативную поддержку. Мы учли ваши пожелания и постарались сделать сайт максимально удобным и информативным. Добро пожаловать на наш новый сайт!"
  tempText = tempText.slice(0, 220) + "..."
  //Закоментировано для prewiev версии


  // useEffect(() => {
  //   const myData = getData("http://172.20.168.200:1337/api/news").then((res) => {
  //     setData(normalizeNewsDataObject(res.data));
  //   });
  // }, []);

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
          {/* {data ? (
            <ul className="cards-section">
              {data.map((itm, index) => {
                let CardText = itm.attributes.body[0].children[0].text;
                if (itm.attributes.body[0].children[0].text.length > 220) {
                  CardText =
                    itm.attributes.body[0].children[0].text.slice(0, 220) +
                    "...";
                }
                return (
                  <NewsCard
                    key={index}
                    title={itm.attributes.title}
                    text={CardText}
                    date={itm.attributes.date}
                    DialogText={itm.attributes.body[0].children[0].text}
                  />
                );
              })}

            </ul>
          ) : (
            <CircularProgress />
          )} */}
          <ul className="cards-section">
            <NewsCard
              key={0}
              title={'Новый сайт нашего интернет-провайдера!'}
              text={tempText}
              date={'09/09/2024'}
              DialogText={"Рады сообщить о запуске нашего нового сайта! Мы обновили дизайн и улучшили функционал, чтобы вам было удобнее пользоваться нашими услугами. Теперь на сайте вы сможете быстро узнать информацию о тарифах, подключить интернет, оплатить услуги и получить оперативную поддержку. Мы учли ваши пожелания и постарались сделать сайт максимально удобным и информативным. Добро пожаловать на наш новый сайт!"}
            />

          </ul>
        </div>
      </div>
    </section>
  );
}
