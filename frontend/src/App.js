import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Header from "./components/header";
import AboutUs from "./components/about";
import Service from "./components/service";
import Home from "./components/home";
import Explore from "./components/explore";

const App = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="service" element={<Service />} />
        <Route path="explore" element={<Explore />} />
      </Route>
    </Routes>
  );
};

export default App;
