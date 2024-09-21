import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_portfolio.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";
import projets from "../../Data/Projets.json";



function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState(projets);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(projets);
    } else {
      setFilteredProjects(projets.filter((project) => project.type === filter));
    }
  };

  const uniqueTypes = [
    "All",
    "Site statique",
    "Site dynamique",
    "SEO",
    "Debug",
  ];

  return (
    <div>
      <h2>Mon Portfolio</h2>
      <div className="filters">
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
      <div>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <p>{project.title}</p>
            <Link to="/projets">
              <img src={project.cover} alt={project.title} />
            </Link>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
