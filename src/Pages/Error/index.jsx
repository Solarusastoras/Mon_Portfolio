import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./_error.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";

const Error = () => {
  useEffect(() => {
    document.title = "Error | Not Found";
  }, []);

  return (
    <div>
      <div>
        <h1 className="title_error">404</h1>
        <p className="text_eror">⛔ Page not Found ⛔</p>
        <Link to="/*" className="errorpage-link">
          Retour au site
        </Link>
      </div>
    </div>
  );
};

export default Error;
