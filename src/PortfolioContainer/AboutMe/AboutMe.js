import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "En tant qu'étudiant motivé en deuxième année de cycle d'ingénieur en informatique et technologies émergentes, j'ai développé une solide expertise dans un large éventail de domaines. \nMa formation m'a permis d'acquérir des compétences approfondies en développement web (front-end et back-end), en développement mobile, ainsi qu'en gestion de bases de données.Mon intérêt pour les technologies émergentes m'a également conduit à explorer des domaines tels que le machine learning, la Business Intelligence (BI) et le Big Data. Cette diversité de compétences me permet d'aborder les défis technologiques avec créativité et assurance.Actuellement à la recherche d'un stage d'un ou deux mois, je suis animé par le désir d'appliquer mes compétences acquises et de continuer à développer mon expertise au sein d'un environnement professionnel.Je suis prêt à m'investir pleinement dans tout projet ou équipe qui me donnera l'opportunité de contribuer de manière significative et d'apprendre de nouvelles perspectives.",
    highlights: {
      bullets: [
        "Développement web Full Stack",
        "Développement backend avec Spring Boot",
        "Développement frontend avec React",
        "Développement mobile (React Native / Java)",
        "Développement d'API REST.",
        "Gestion des bases de données",
        "Gestion et traitement de données massives",

      ],
      heading: "Voici quelques éléments importants :",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  const onContactClick = () => {
    let screenComponent = document.getElementById("Contact Me");
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"À propos de moi"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={onContactClick}>
                <a href="https://www.linkedin.com/in/mohammed-belkarradi-770954211/" target="_blank" rel="noopener noreferrer">
                  Me contacter
                </a>
              </button>

              <a href="resume.pdf" download="CV_BELKARRADI_Mohammed.pdf">
                <button className="btn highlighted-btn">Obtenir mon CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
