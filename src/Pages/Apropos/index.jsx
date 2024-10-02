import React from "react";
import { Link } from "react-router-dom";
import "./_apropos.scss";
import "../../Utils/SASS/base/_colors.scss";

const Apropos = () => {
  return (
    <div className="apropos-container">
      <h1 className="apropos-title">À propos</h1>
      <div className="apropos-content">
        <p>
          Je suis un développeur web junior, passionné par le développement web
          et mobile. J'ai suivi une formation de développeur Front-End à
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
