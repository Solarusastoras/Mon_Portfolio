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
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="identite_position">
        MICHAEL
        <br />
        <br />
        <span className="centered-text">DULOU</span>
      </div>

      <h2 className="header_poste">
        Développeur
        <br />
        <br />
        <span className="centered-text">Front-End</span>
      </h2>

      <nav>
        <ul className="header_nav">
          <li>
            <Link to="/Mon_Portfolio">
              <img src={LogoAccueil} alt="Logo Accueil" />
              <span className="up">Accueil</span>
            </Link>
          </li>
          <li
            className="pointer-cursor"
            onClick={() => scrollToSection("portfolio")}
          >
            <img src={LogoPortofolio} alt="Logo Portfolio" />
            <span>Portfolio</span>
          </li>
          <li
            className="pointer-cursor"
            onClick={() => scrollToSection("contact")}
          >
            <img src={LogoContact} alt="Logo Contact" />
            <span>Contact</span>
          </li>
          <li>
            <Link to="/Apropos">
              <img src={LogoAPropos} alt="Logo A propos" />
              <span className="up - texte_ligne">A propos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
