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
      <div className="center">
        <Portfolio />
      </div>
      <Form />
    </div>
  );
}

export default Home;
