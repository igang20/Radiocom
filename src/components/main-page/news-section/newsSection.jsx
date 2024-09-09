import "./NewsSection.css";
import NewsCard from "./NewsCard/NewsCard";
import { normalizeNewsDataObject, getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";


export default function NewsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData("http://192.168.100.107:1337/api/news").then((res) => {
      setData(normalizeNewsDataObject(res.data));
    });
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
          )}
        </div>
      </div>
    </section>
  );
}
