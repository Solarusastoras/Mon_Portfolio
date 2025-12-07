import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./apropos.scss";
const Apropos = () => {
  useEffect(() => {
    const homeLink = document.querySelector(".home-link");
    const originalText = homeLink.textContent;
    const hieroglyphText = "𓄒 𓅱 𓅃 𓃭 𓅃 𓅱 𓄒  𓃭";
    const handleMouseOver = () => {
      homeLink.textContent = hieroglyphText;
    };
    const handleMouseOut = () => {
      homeLink.textContent = originalText;
    };
    homeLink.addEventListener("mouseover", handleMouseOver);
    homeLink.addEventListener("mouseout", handleMouseOut);
    return () => {
      homeLink.removeEventListener("mouseover", handleMouseOver);
      homeLink.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return (
    <div className="apropos-container">
      <h1 className="apropos-title">À PROPOS</h1>
      <div className="apropos-content">
        <p>
          Je suis un intégrateur web junior, passionné par le développement web
          et mobile. J'ai suivi une formation d'intégrateur Front-End à
          Openclassroom. J'ai appris à développer des applications web et
          mobiles en utilisant les technologies les plus récentes telque HTML5,
          CSS5, JS, React, Redux, SEO.
        </p>
      </div>
      <div className="apropos-lien">
        <Link to="/" className="home-link">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};
export default Apropos;