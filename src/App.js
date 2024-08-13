import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainSlide from "./components/main-page/main-slide/main-slide";
import PopularRates from "./components/main-page/popular-rates/popular-rates";

import useFetch from "./hooks/useFetch";
import { normalizeNewsDataObject, getData } from "./hooks/fetchData";
import getData from "./hooks/fetchData";
import { useEffect, useState } from "react";
import NewsSection from "./components/news/NewsSection";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData("http://localhost:1337/api/news").then((res) => {
      setData(res.data);
      console.log(res.data);
      console.log(normalizeNewsDataObject(res.data));
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <MainSlide />
        <PopularRates />
        <NewsSection />
        <div>
          {data ? (
            <ul>
              {data.map((itm, index) => {
                return <li key={index}>{itm.attributes.title}</li>;
              })}
            </ul>
          ) : (
            "Error :("
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
