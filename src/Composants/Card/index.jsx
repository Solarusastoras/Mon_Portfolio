// src/Composants/Card/index.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./_card.scss";

const Card = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("clickedId", project.id);
    console.log(`ID cliqué stocké: ${localStorage.getItem("clickedId")}`);
    navigate(`/projets`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={project.cover} alt={project.title} className="card-cover" />
      <h2 className="card-title">{project.title}</h2>
    </div>
  );
};

export default Card;
