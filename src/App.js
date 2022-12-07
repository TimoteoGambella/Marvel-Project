import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./styles/styles.scss"
import { ApiContext } from "./context/ApiContext.jsx";

function App() {
  return (
    <>
    <ApiContext>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </ApiContext>
    </>
  );
}

export default App;
