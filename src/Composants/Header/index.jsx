import React from "react";
import { Link } from "react-router-dom";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import "./_header.scss";
import LogoAccueil from "../../Utils/Images/Logo/accueil.webp";
import LogoPortofolio from "../../Utils/Images/Logo/dossier-portfolio.webp";
import LogoAPropos from "../../Utils/Images/Logo/carte-didentite.webp";
import LogoContact from "../../Utils/Images/Logo/contacts-google.webp";


function Header() {
  return (
    <header className="header">
      <h4>
        MICHAEL
        <br />
        <br />
        <span className="centered-text">DULOU</span>
      </h4>

      <h2 className="header_poste">
        Développeur
        <br />
        <br />
        <span className="centered-text">Front-End</span>
      </h2>

      <nav>
        <ul className="header_nav">
          <Link to="/">
            <li>
              <img src={LogoAccueil} alt="Accueil" />
              Accueil
            </li>
          </Link>
          <li>
            <img src={LogoPortofolio} alt="Portfolio" />
            Portfolio
          </li>
          <li>
            <img src={LogoContact} alt="Contact" />
            Contact
          </li>
          <Link to="/Apropos">
            <li>
              <img src={LogoAPropos} alt="Apropos" />A propos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
