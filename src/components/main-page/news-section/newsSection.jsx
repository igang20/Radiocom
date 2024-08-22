import "./NewsSection.css";
import NewsCard from "./NewsCard/NewsCard";
import { normalizeNewsDataObject, getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";

export default function NewsSection() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const myData = getData("http://192.168.0.87:1337/api/news").then((res) => {
  //     setData(normalizeNewsDataObject(res.data));
  //   });
  // }, []);

  return (
    <section className="news-section">
      <div className="news-content">
        {/*<img
          src="/imgs/BcgReferences/Newspaper.svg"
          alt="Newspaper"
          className="bcg-img2"
        />*/}
        <h1 className="news-heading">Новости компании</h1>
        <div>
          {/* {data ? ( */}
          <ul className="cards-section">
            {/* {data.map((itm, index) => {
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
              })} */}

            <NewsCard title={'Плановые отключения'} date={'24.05.2024'} text={'Информируем вас о предстоящем плановом отключении интернета, которое пройдет с [дата] по [дата] с [время] до [время]. Отключение необходимо для проведения технических работ по улучшению качества предоставляемых услуг.'} />
            <NewsCard title={'Плановые отключения'} date={'29.08.2024'} text={'Информируем вас о предстоящем плановом отключении интернета, которое пройдет с [дата] по [дата] с [время] до [время]. Отключение необходимо для проведения технических работ по улучшению качества предоставляемых услуг.'} />
          </ul>
          {/* ) : (
         "Загрузка..."
        // )} */}
        </div>
      </div>
    </section>
  );
}
