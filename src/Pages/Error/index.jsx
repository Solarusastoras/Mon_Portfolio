import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./_error.scss";

const Error = () => {
  useEffect(() => {
    document.title = "Error | Not Found";
  }, []);

  return (
    <div>
      <div>
        <h1 className="title_error">404</h1>
        <div className="colonne_texterror_lien">
          <p className="text_eror">⛔ Page not Found ⛔</p>
          <Link to="/Mon_Portfolio" className="errorpage-link">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
