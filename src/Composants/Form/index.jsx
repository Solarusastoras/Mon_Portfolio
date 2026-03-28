import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import "./form.scss";
function Form() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [confirmation, setConfirmation] = useState("");
  const [invalidFields, setInvalidFields] = useState({
    nom: false,
    email: false,
    message: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    emailjs
      .send(
        "service_5urmzcq",
        "template_51z9t1e",
        formData,
        "MWPrmDFXWXcNg-YkH"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setConfirmation("✅ Votre message a été envoyé avec succès !");
        setFormData({ nom: "", email: "", message: "" });
        setTimeout(() => setIsModalOpen(false), 2000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        if (err.status === 412 || err.text?.includes("Invalid grant")) {
          setConfirmation("⚠️ Service de messagerie temporairement indisponible. Veuillez me contacter via LinkedIn.");
        } else {
          setConfirmation("❌ Une erreur s'est produite. Veuillez réessayer ou me contacter via LinkedIn.");
        }
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInvalidFields((prev) => ({ ...prev, [name]: !value }));
  };
  const isFormValid = formData.nom && formData.email && formData.message;
  return (
    <>
      <div className="conteneur-formulaire">
        <h3 className="contact-title">CONTACT</h3>
        <br />
        <div className="cadre-texte">
          <p className="question-text">Une question ?</p>
          <p className="question-text">Un site à faire ?</p>
          <p className="question-text">Un devis ?</p>
          <p className="description-text">
            N'hésitez pas à m'écrire !
            <br />
            Je vous répondrais en moins de 24 heures
          </p>
        </div>
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          M'écrire
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer la modale"
            >
              ✕
            </button>
            <h3>CONTACT</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nom">
                <FontAwesomeIcon icon={faUser} /> Nom
              </label>
              <input
                type="text"
                name="nom"
                id="nom"
                autoComplete="name"
                placeholder="Votre nom"
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
                placeholder="votre.email@exemple.com"
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
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleInputChange}
                className={invalidFields.message ? "invalid" : ""}
              ></textarea>
              {confirmation && (
                <p className="confirmation-message">{confirmation}</p>
              )}
              <div className="submit-container">
                <input
                  type="submit"
                  aria-label="Envoyer le formulaire"
                  value="Envoyer"
                  className={isFormValid ? "valid-submit" : ""}
                  disabled={!isFormValid}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Form;