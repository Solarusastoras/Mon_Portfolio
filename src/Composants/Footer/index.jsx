import React from "react";
import "./_footer.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import LogoLinkedin from "../../Utils/Images/Logo/linkedin.webp";

function Footer() {
  return (
    <footer>
      <div>© 2024 Michael Dulou</div>
      <div>Téléphone : 06 48 71 37 27</div>
      <div>mail : micformweb@gmail.com</div>
      <div>
        <a
          href="https://www.linkedin.com/in/michaeldulou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LogoLinkedin} alt="Logo de LinkedIn" />
          Mon LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;