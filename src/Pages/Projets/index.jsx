import React, { useState, useEffect } from "react";
import "./_projets.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import projetsData from "../../Data/Projets.json"; 


function Projets() {
  const [projet, setProjet] = useState(null);

  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundProjet = projetsData.find((projet) => projet.id === clickedId);
    setProjet(foundProjet);
  }, []);

  if (!projet) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{projet.title}</h1>
      <img src={projet.cover} alt={projet.title} />
      <h2>Tags</h2>
      <ul>
        {projet.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projets;
