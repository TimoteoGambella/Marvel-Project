import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Menu from "./views/Menu.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./styles/styles.scss";
import { ApiContext } from "./context/ApiContext.jsx";

const App = () => {
  return (
    <>
      <ApiContext>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryID" element={<Menu />} />
          </Routes>
          <Footer />
        </Router>
      </ApiContext>
    </>
  );
};

export default App;
