import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header">
      <nav className="header_navigation">
        <ul className="header_nav">
          <li className="nav-item nav-accueil">
            <Link to="/">
              <span data-hieroglyph="𓉔𓅓𓏏">Accueil</span>
            </Link>
          </li>
          <li className="nav-item nav-apropos">
            <Link to="/a-propos">
              <span className="texte_ligne" data-hieroglyph="𓂋𓎡𓏏">A propos</span>
            </Link>
          </li>
          <li
            className="nav-item nav-portfolio pointer-cursor"
            onClick={() => scrollToSection("portfolio")}
          >
            <span data-hieroglyph="𓂋𓏤𓄿𓏏">Portfolio</span>
          </li>
          <li
            className="nav-item nav-contact pointer-cursor"
            onClick={() => scrollToSection("contact")}
          >
            <span data-hieroglyph="𓌃𓂧𓏏">Contact</span>
          </li>
        </ul>
      </nav>
      <div className="header_center">
        <div className="identite_position" data-text="MICHAEL DULOU">
          MICHAEL DULOU
        </div>
        <h2 className="header_poste">
          Intégrateur Web
        </h2>
      </div>
    </header>
  );
}
export default Header;