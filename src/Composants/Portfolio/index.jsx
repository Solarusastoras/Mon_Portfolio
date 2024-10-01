import React, { useState } from "react";
import "./_portfolio.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import projets from "../../Data/Projets.json";
import Card from "../../Composants/Card";

function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState(projets);
  const [activeFilter, setActiveFilter] = useState("Tous");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "Tous") {
      setFilteredProjects(projets);
    } else {
      setFilteredProjects(projets.filter((project) => project.type === filter));
    }
  };

  const handleProjectClick = (id) => {
    localStorage.setItem("selectedProjectId", id);
  };

  const uniqueTypes = [
    "Tous",
    "Site statique",
    "Site dynamique",
    "SEO",
    "Debug",
  ];

  return (
    <div className="conteneur-portfolio">
      <div className="conteneur-titre">
        <h3 className="title_portfolio">MON PORTFOLIO</h3>
      </div>
      <div className="filtres">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            className={activeFilter === type ? "active" : ""}
            onClick={() => handleFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid_projets">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project.id)}>
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
