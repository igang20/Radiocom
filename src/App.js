import "./App.css";

import Header from "./components/header/header";
import MainPage from "./pages/MainPage/MainPage";
import Support from "./pages/Support/Support";
import About from "./pages/AboutUs/about";
import Footer from "./components/footer/footer";
import Payment from "./pages/Payment/Payment";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <section className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/support" element={<Support />} />
          <Route path="/speedtest" />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

// TODO: Исправит размеры контентныйх секций с 1400px на 1300px

export default App;
