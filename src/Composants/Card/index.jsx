import React from "react";
import "./_card.scss"; // Assurez-vous d'avoir un fichier SCSS pour les styles de la carte
import { Link } from "react-router-dom";

function Card({ project }) {
  return (
    <Link to="/projets">
      <div className="card">
        <p className="card-title">{project.title}</p>
        <img className="card-image" src={project.cover} alt={project.title} />
      </div>
    </Link>
  );
}

export default Card;
