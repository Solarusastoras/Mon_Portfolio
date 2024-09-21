import React from "react";
import "./_footer.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";

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
          Mon LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;