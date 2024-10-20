import React, { useState, useEffect } from "react";
import projets from "../../Data/Projets.json";
import "./_projets.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/outils/_mixins.scss";

const Projets = () => {
  // Déclare un état local pour stocker le projet cliqué
  const [clickedProjet, setClickedProjet] = useState(null);

  // Utilise useEffect pour exécuter du code après le rendu du composant
  useEffect(() => {
    // Récupère l'ID du projet cliqué depuis le localStorage
    const clickedId = localStorage.getItem("clickedId");
    console.log(`ID récupéré: ${clickedId}`);

    // Vérifie si un ID a été récupéré
    if (clickedId) {
      // Trouve le projet correspondant à l'ID récupéré
      const foundProjet = projets.find((projet) => projet.id === clickedId);

      // Si le projet est trouvé, met à jour l'état local avec le projet trouvé
      if (foundProjet) {
        setClickedProjet(foundProjet);
      } else {
        // Si le projet n'est pas trouvé, affiche une erreur dans la console
        console.error(`Projet avec l'ID ${clickedId} non trouvé.`);
      }
    } else {
      // Si aucun ID n'est trouvé dans le localStorage, affiche une erreur dans la console
      console.error("Aucun ID cliqué trouvé dans localStorage.");
    } // Le tableau vide signifie que cet effet s'exécute une seule fois après le premier rendu
  }, []); 

  // Si aucun projet n'est cliqué, affiche un message de chargement
  if (!clickedProjet) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="conteneur-projet">
      <h1 className="titre-projet">{clickedProjet.title}</h1>
      <img
        className="projet-cover"
        src={clickedProjet.pictures}
        alt={clickedProjet.title}
      />
      <div className="cards_projet">
        <div className="card_descrip">
          <h3 className="h3_projet">Description</h3>
          <p className="projet-description">{clickedProjet.description}</p>
        </div>
        <div className="card_langage">
          <h3 className="h3_projet">Langages utilisés</h3>
          <div className="projet-tags">
            {clickedProjet.tags.map((tags, index) => (
              <div
                key={index}
                className="projet-tag"
                data-definition={tags.definition}
              >
                <img src={tags.logo} alt={tags.alt} className="tag-logo" />
                <span className="tag-name">{tags.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="projet-git">
        <div className="card_git">
          <h3 className="h3_projet">Le code</h3>
          <div
            className="projet-git-button"
            onClick={() => window.open(clickedProjet.github, "_blank")}
          >
            GitHub
          </div>
        </div>
        {clickedProjet.gitpage && (
          <div className="card_git">
            <h3 className="h3_projet">Le site</h3>
            <div
              className="projet-git-button"
              onClick={() => window.open(clickedProjet.gitpage, "_blank")}
            >
              GitPage
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projets;
