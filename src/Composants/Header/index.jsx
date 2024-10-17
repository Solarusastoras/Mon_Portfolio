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
          <Link to="/Mon_Portfolio">
            <li>
              <img src={LogoAccueil} alt="Accueil" />
              <span>Accueil</span>
            </li>
          </Link>
          <li
            className="pointer-cursor"
            onClick={() => scrollToSection("portfolio")}
          >
            <img src={LogoPortofolio} alt="Portfolio" />
            <span>Portfolio</span>
          </li>
          <li
            className="pointer-cursor"
            onClick={() => scrollToSection("contact")}
          >
            <img src={LogoContact} alt="Contact" />
            <span>Contact</span>
          </li>
          <Link to="/Apropos">
            <li>
              <img src={LogoAPropos} alt="Apropos" /> <span>A propos</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
