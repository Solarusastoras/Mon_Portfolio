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
    <div className="projet-details">
      <h1 className="projet-title">{clickedProjet.title}</h1>
      <img
        src={clickedProjet.picture}
        alt={clickedProjet.title}
        className="projet-cover"
      />
      <h3>Description</h3>
      <p className="projet-description">{clickedProjet.description}</p>
      <h3>Github</h3>
      <p>Lien du code source du site cliqué</p>
      <a href={clickedProjet.git} className="projet-git">
        GitHub
      </a>
      <h3>GitPage</h3>
      <p>Cliquer droit de la souris pour ouvrir le site cliqué</p>
      <a href={clickedProjet.gitpage} className="projet-gitpage">
        Git page
      </a>
      <h3>Langages Utilisés</h3>
      <p className="projet-tag">{clickedProjet.tags}</p>
    </div>
  );
};

export default Projets;
