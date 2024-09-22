import React from "react";
import "./_form.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";

function Form() {
  return (
    <div className="conteneur-formulaire">
      <div className="cadre-texte">
        <h3>Une question ? Une demande de devis ?</h3>
        <p>N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures</p>
      </div>
      <form action="#" method="post">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" autoComplete="name" />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="email" />
        
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" autoComplete="off"></textarea>
        
        <input type="submit" aria-label="Envoyer le formulaire" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;