import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Composants/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import "./utils/SASS/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);