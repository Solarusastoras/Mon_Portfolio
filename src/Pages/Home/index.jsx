import React from "react";
import Form from "../../Composants/Form";
import Portfolio from "../../Composants/Portfolio";
import Titre from "../../Composants/Titre";
import "./_home.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import "../../Utils/SASS/outils/_mixins.scss";

function Home() {
  return (
    <div>
      <Titre />
      <div id="portfolio" className="center" role="main">
        <Portfolio />
      </div>
      <div id="contact" role="form">
        <Form />
      </div>
    </div>
  );
}

export default Home;
