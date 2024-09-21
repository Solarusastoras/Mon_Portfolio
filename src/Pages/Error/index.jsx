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
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Retour au site</Link>
      </div>
    </div>
  );
};

export default Error;
