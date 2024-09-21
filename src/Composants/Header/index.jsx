import React from "react";
import { Link } from "react-router-dom";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import "./_header.scss";

function Header() {
  return (
    <header className="row">
      <div> MICHAEL DULOU</div>
      <div> Développeur Web</div>
      <nav>
        <ul>
          <Link to="/">
          <li>Accueil</li>
          </Link>
          <li>Mon Portefolio</li>
          <li>Contact</li>
          <li>Prestation</li>
          <Link to="/Apropos">
            <li>A propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
