import "./App.css";

import Header from "./components/header/header";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/AboutUs/about";
import Footer from "./components/footer/footer";

import { Route, Routes } from "react-router-dom";

// import { normalizeNewsDataObject, getData } from "./hooks/fetchData";
// import { useEffect, useState } from "react";
// import useFetch from "./hooks/useFetch";

function App() {
  // const [data, setData] = useState(null);
  return (
    <>
      <Header />
      <section className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment" />
          <Route path="/support" />
          <Route path="/speedtest" />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
