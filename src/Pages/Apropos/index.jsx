import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./apropos.scss";

const Apropos = () => {
  useEffect(() => {
    const homeLink = document.querySelector(".home-link");
    if (!homeLink) return;
    const originalText = homeLink.textContent;
    const hieroglyphText = "𓄒 𓅱 𓅃 𓃭 𓅃 𓅱 𓄒  𓃭";
    const handleMouseOver = () => { homeLink.textContent = hieroglyphText; };
    const handleMouseOut  = () => { homeLink.textContent = originalText; };
    homeLink.addEventListener("mouseover", handleMouseOver);
    homeLink.addEventListener("mouseout",  handleMouseOut);
    return () => {
      homeLink.removeEventListener("mouseover", handleMouseOver);
      homeLink.removeEventListener("mouseout",  handleMouseOut);
    };
  }, []);

  const skills = ["HTML5", "CSS / SCSS", "JavaScript", "React", "Redux", "SEO", "Git", "Tests unitaires"];

  return (
    <div className="apropos-container">

      {/* ── Titre ── */}
      <h1 className="apropos-title">À Propos</h1>

      {/* ── Accroche ── */}
      <p className="apropos-intro">
        Intégrateur web formé chez OpenClassrooms en 2024, passionné par la technologie,
        l'histoire et l'apprentissage continu — je crée des interfaces accessibles, modernes
        et bien structurées.
      </p>

      {/* ── Sections ── */}
      <div className="apropos-sections">

        <div className="apropos-section">
          <div className="section-icon">𓂀</div>
          <div className="section-body">
            <h2 className="section-heading">Profil</h2>
            <p className="section-text">
              Curieux, rigoureux et motivé, j'aborde chaque projet avec méthode et un souci
              du détail hérité de mes expériences passées. Mon approche est guidée par le
              respect des relations humaines et le plaisir de progresser.
            </p>
          </div>
        </div>

        <div className="apropos-section">
          <div className="section-icon">𓏙</div>
          <div className="section-body">
            <h2 className="section-heading">Parcours</h2>
            <p className="section-text">
              Après un BTS en IAA (2010–2013), j'ai travaillé comme opérateur STEP à Pau
              (2021–2023) — numérisation, indexation et contrôle qualité de documents.
              Cette expérience m'a forgé <em>méthode, précision et sens de l'organisation</em>.
            </p>
          </div>
        </div>

        <div className="apropos-section">
          <div className="section-icon">𓅃</div>
          <div className="section-body">
            <h2 className="section-heading">Compétences web</h2>
            <p className="section-text">
              En 2024, je me spécialise dans l'intégration Front-End : sites responsives,
              intégration de maquettes Figma, applications React et optimisation SEO.
            </p>
            <div className="skills-grid">
              {skills.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="apropos-section">
          <div className="section-icon">𓆣</div>
          <div className="section-body">
            <h2 className="section-heading">En dehors du code</h2>
            <p className="section-text">
              Sport américain, jeux vidéo et cinéma — ma curiosité déborde du clavier.
              Cette polyvalence nourrit ma créativité et ma capacité à m'adapter à
              des contextes variés.
            </p>
          </div>
        </div>

      </div>

      {/* ── Retour ── */}
      <div className="apropos-lien">
        <Link to="/" className="home-link">
          Retour à l'accueil
        </Link>
      </div>

    </div>
  );
};

export default Apropos;
