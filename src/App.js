import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainSlide from "./components/main-page/main-slide/main-slide";
import PopularRates from "./components/main-page/popular-rates/popular-rates";

import useFetch from "./hooks/useFetch";
import getData from "./hooks/fetchData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData("http://localhost:1337/api/news").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <MainSlide />
      <PopularRates />
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
      <Footer />
    </div>
  );
}

export default App;
