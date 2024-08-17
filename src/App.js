import "./App.css";

import Header from "./components/header/header";
import MainPage from "./pages/MainPage/MainPage";
import Support from "./pages/Support/Support";
import About from "./pages/AboutUs/about";
import Footer from "./components/footer/footer";
import Payment from "./pages/Payment/Payment";
import SpeedTest from "./pages/SpeedTest/SpeedTest";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const userLocation = useLocation().pathname;

  useEffect(() => {
    window.localStorage.setItem("fixingReaload", true);
  }, [userLocation]);

  return (
    <>
      <Header />
      <section className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/support" element={<Support />} />
          <Route path="/speedtest" element={<SpeedTest />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
