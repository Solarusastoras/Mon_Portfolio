import React from "react";
import { Link } from "react-router-dom";
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
      <div className="header_center">
        <div className="identite_position" data-text="MICHAEL DULOU">
          MICHAEL DULOU
        </div>
        <h2 className="header_poste">
          Intégrateur Web
        </h2>
      </div>

      <nav className="header_navigation">
        <div className="nav-left">
          <ul className="header_nav">
            <li className="nav-item nav-accueil">
              <Link to="/">
                <img src={LogoAccueil} alt="Logo Accueil" />
                <span data-hieroglyph="𓉔𓅓𓏏">Accueil</span>
              </Link>
            </li>
            <li className="nav-item nav-apropos">
              <Link to="/a-propos">
                <img src={LogoAPropos} alt="Logo A propos" />
                <span className="texte_ligne" data-hieroglyph="𓂋𓎡𓏏">A propos</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="header_nav">
            <li
              className="nav-item nav-portfolio pointer-cursor"
              onClick={() => scrollToSection("portfolio")}
            >
              <img src={LogoPortofolio} alt="Logo Portfolio" />
              <span data-hieroglyph="𓂋𓏤𓄿𓏏">Portfolio</span>
            </li>
            <li
              className="nav-item nav-contact pointer-cursor"
              onClick={() => scrollToSection("contact")}
            >
              <img src={LogoContact} alt="Logo Contact" />
              <span data-hieroglyph="𓌃𓂧𓏏">Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
