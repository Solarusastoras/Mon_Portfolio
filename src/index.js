import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
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
    <HelmetProvider>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Michael Dulou, intégrateur Web basé à Lescar. Découvrez mon portfolio et mes projets."
          />
          <meta
            name="keywords"
            content="Michael Dulou, intégrateur Web, Lescar, portfolio, projets, développeur"
          />
          <meta
            name="google-site-verification"
            content="sso7VIoJAC2I2JijQ3ngCGe8P-g_pw-GLJ7XiKX43pk"
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Michael Dulou - Portfolio" />
          <meta
            property="og:description"
            content="Michael Dulou, intégrateur Web basé à Lescar. Découvrez mon portfolio et mes projets."
          />
          <meta property="og:image" content="/og-image.jpg" />
          <meta
            property="og:url"
            content="https://solarusastoras.github.io/Mon_Portfolio/"
          />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Michael Dulou - Portfolio" />
          <meta
            name="twitter:description"
            content="Michael Dulou, intégrateur Web basé à Lescar. Découvrez mon portfolio et mes projets."
          />
          <meta name="twitter:image" content="/twitter-image.jpg" />

          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Title */}
          <title>Michael Dulou - Portfolio</title>

          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "Michael Dulou - Portfolio",
                "url": "https://solarusastoras.github.io/Mon_Portfolio/",
                "description": "Michael Dulou, intégrateur Web basé à Lescar. Découvrez mon portfolio et mes projets.",
                "author": {
                  "@type": "Person",
                  "name": "Michael Dulou"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              }
            `}
          </script>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/Mon_Portfolio" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
