import React from "react";
import Form from "../../Composants/Form";
import Prestation from "../../Composants/Prestation";
import Presentation from "../../Composants/Presentation";
import Portfolio from "../../Composants/Portfolio";
import Titre from "../../Composants/Titre";
import "./_home.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";


function Home() {
  return (
    <div>
      <Titre />
      <Presentation />
      <Portfolio />
      <Form />
      <Prestation />
    </div>
  );
}

export default Home;
