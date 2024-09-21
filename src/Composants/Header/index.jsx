import React from "react";
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
          <li>Accueil</li>
          <li>Mon Portefolio</li>
          <li>Contact</li>
          <li>Prestation</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
