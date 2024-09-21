import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Composants/Header";
import Footer from "./Composants/Footer";
import Home from "./Pages/Home";
import Apropos from "./Pages/Apropos";
import Projets from "./Pages/Projets";
import Error from "./Pages/Error";
import "./Utils/SASS/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);