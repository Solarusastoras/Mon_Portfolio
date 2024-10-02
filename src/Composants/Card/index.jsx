
import React from "react";
import { useNavigate } from "react-router-dom";
import "./_card.scss";
import "../../Utils/SASS/base/_colors.scss";

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
      <h3 className="card-title">{project.title}</h3>
    </div>
  );
};

export default Card;
