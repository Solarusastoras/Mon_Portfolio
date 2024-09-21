import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Composants/Header";
import Footer from "./Composants/Footer";
import Home from "./Pages/Home";
import "./Utils/SASS/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Home/>
      <Footer />
    </Router>
  </React.StrictMode>
);