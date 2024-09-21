import React from "react";
import "./_prestation.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";

function Prestation() {
  return (
    <div>
      <h2>Prestation</h2>
      <div>
        <div>Site Statique</div>
        <p>500€</p>
        <div>Site Dynamique</div>
        <p>à partir de 3000€</p>
        <div>SEO</div>
        <p>à partir de 75€ / h</p>
        <div>Debugage de Site</div>
        <p>à partir de 40€ / h</p>
        <div>Formation (Decouverte du web)</div>
        <p>à partir de 40€ / h</p>
      </div>
    </div>
  );
}

export default Prestation;
