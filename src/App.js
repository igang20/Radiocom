import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainSlide from "./components/main-page/main-slide/main-slide";
import PopularRates from "./components/main-page/popular-rates/popular-rates";
import getData from "./hooks/fetchData";
import { useEffect, useState } from "react";
import NewsSection from "./components/news/NewsSection";

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const myData = getData("http://192.168.0.87:1337/api/news").then((res) => {
  //     setData(res.data);
  //   });
  //   console.log(data);
  // }, []);

  return (
    <>
      <div className="App">
        <Header />
        <MainSlide />
        <PopularRates />
        <NewsSection />
        {/* <div>
        {data ? (
          <ul>
            {data.map((itm, index) => {
              return <li key={index}>{itm.attributes.title}</li>;
            })}
          </ul>
        ) : (
          "Error :("
        )}
      </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
