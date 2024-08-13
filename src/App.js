import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainSlide from "./components/main-page/main-slide/main-slide";
import PopularRates from "./components/main-page/popular-rates/popular-rates";
import NewsSection from "./components/news/NewsSection";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainSlide />
        <PopularRates />
        <NewsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
