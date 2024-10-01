import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./_form.scss";
import "../../Utils/SASS/base/_colors.scss";
import "../../Utils/SASS/base/_fonts.scss";

function Form() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [confirmation, setConfirmation] = useState("");
  const [invalidFields, setInvalidFields] = useState({
    nom: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    if (confirmation) {
      const timer = setTimeout(() => setConfirmation(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [confirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newInvalidFields = {
      nom: !formData.nom,
      email: !formData.email || !emailRegex.test(formData.email),
      message: !formData.message,
    };

    setInvalidFields(newInvalidFields);

    if (Object.values(newInvalidFields).some((field) => field)) {
      alert("🔴 Merci de remplir tous les champs 🔴");
      setTimeout(
        () => setInvalidFields({ nom: false, email: false, message: false }),
        5000
      );
      return;
    }

    setConfirmation("Votre message a été envoyé avec succès !");
    setFormData({ nom: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInvalidFields((prev) => ({ ...prev, [name]: !value }));
  };

  const isFormValid = formData.nom && formData.email && formData.message;

  return (
    <div className="conteneur-formulaire">
      <div className="cadre-texte">
        <h3>Une question ? Une demande de devis ?</h3>
        <p>
          N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">
          <FontAwesomeIcon icon={faUser} /> Nom
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          autoComplete="name"
          value={formData.nom}
          onChange={handleInputChange}
          className={invalidFields.nom ? "invalid" : ""}
        />

        <label htmlFor="email">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
          className={invalidFields.email ? "invalid" : ""}
        />

        <label htmlFor="message">
          <FontAwesomeIcon icon={faComment} /> Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          autoComplete="off"
          value={formData.message}
          onChange={handleInputChange}
          className={invalidFields.message ? "invalid" : ""}
        ></textarea>

        {confirmation && <p className="confirmation-message">{confirmation}</p>}

        <div className="submit-container">
          <input
            type="submit"
            aria-label="Envoyer le formulaire"
            value="Envoyer"
            className={isFormValid ? "valid-submit" : ""}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
