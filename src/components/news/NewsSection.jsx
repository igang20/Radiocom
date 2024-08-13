import "./NewsSection.css";
import NewsCard from "./NewsCard/NewsCard";
import { normalizeNewsDataObject, getData } from "../../hooks/fetchData";
import { useEffect, useState } from "react";

export default function NewsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData("http://localhost:1337/api/news").then((res) => {
      setData(normalizeNewsDataObject(res.data));
    });
  }, []);

  return (
    <section className="news-section">
      <div className="news-content">
        <h1 className="news-heading">Новости компании</h1>
        <div>
          {data ? (
            <ul className="cards-section">
              {data.map((itm, index) => {
                return (
                  <NewsCard
                    key={index}
                    title={itm.attributes.title}
                    text={itm.attributes.body[0].children[0].text}
                    date={itm.attributes.date}
                  />
                );
              })}
            </ul>
          ) : (
            "Загрузка..."
          )}
        </div>
      </div>
    </section>
  );
}
