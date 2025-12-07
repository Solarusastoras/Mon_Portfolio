import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";
const Card = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("clickedId", project.id);
    console.log(`ID cliqué stocké: ${localStorage.getItem("clickedId")}`);
    navigate(`/projets`);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img 
        src={process.env.PUBLIC_URL + project.cover} 
        alt={project.title} 
        className="card-cover"
        loading="lazy"
        decoding="async"
      />
      <h3 className="card-title">{project.title}</h3>
    </div>
  );
};
export default Card;