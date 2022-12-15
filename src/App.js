import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx";
import Detail from "./views/Detail.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { ApiContext } from "./context/ApiContext.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <ApiContext>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryID" element={<Menu />} />
            <Route path="/category/:categoryID/:itemID" element={<Detail />} />
          </Routes>
          <Footer />
        </Router>
      </ApiContext>
    </>
  );
};

export default App;
