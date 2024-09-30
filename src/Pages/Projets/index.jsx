// src/Pages/Projets/index.jsx
import React, { useState, useEffect } from "react";
import projets from "../../Data/Projets.json";
import "./_projets.scss";

const Projets = () => {
  const [clickedProjet, setClickedProjet] = useState(null);

  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    console.log(`ID récupéré: ${clickedId}`);
    if (clickedId) {
      const foundProjet = projets.find((projet) => projet.id === clickedId);
      if (foundProjet) {
        setClickedProjet(foundProjet);
      } else {
        console.error(`Projet avec l'ID ${clickedId} non trouvé.`);
      }
    } else {
      console.error("Aucun ID cliqué trouvé dans localStorage.");
    }
  }, []);

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
          <h3>Description</h3>
          <p className="projet-description">{clickedProjet.description}</p>
        </div>
        <div className="card_langage">
          <h3>Langages utilisés</h3>
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
        <div className="card">
          <h3>Lien vers la repo du site github</h3>
          <div
            className="projet-git-button"
            onClick={() => window.open(clickedProjet.github, "_blank")}
          >
            GitHub
          </div>
        </div>
        <div className="card">
          <h3>Ouverture du site</h3>
          <div
            className="projet-git-button"
            onClick={() => window.open(clickedProjet.gitpage, "_blank")}
          >
            GitPage
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
