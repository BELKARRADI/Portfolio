import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Formation", logoSrc: "education.svg" },
    { label: "Expérience Professionnelle", logoSrc: "work-history.svg" },
    { label: "Compétences", logoSrc: "programming-skills.svg" },
    { label: "Projets", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "tailwind" },
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "React Native" },
    { skill: "JAVA" },
    { skill: "Python" },
    { skill: "Spring Boot" },
    { skill: "Flask" },
    { skill: "Laravel" },
    { skill: "Express JS" },
    { skill: "MySQL" },
    { skill: "Oracle Database" },
    { skill: "PL/SQL" },
    { skill: "MongoDb" },
    { skill: "Hbase" },
    { skill: "Microsoft Power BI" },
    { skill: "Talend" },
    { skill: "Hadoop" },
   
  ];

  const projectsDetails = [
    {
      title: "Projet de fin d'année (PFA II) | ArtiZone",
      duration: { fromDate: "2024" },
      description:
        "Conception et Développement d'une Application Web Intégrant l'Intelligence Artificielle pour une Gestion Avancée de l'Énergie Générée par les Panneaux Photovoltaïques.",
      subHeading: "Technologies utilisées :  Python, Flask, React JS, Mongo Db",
    },
    {
      title: "Projet de fin d'année (PFA I) | ArtiZone",
      duration: { fromDate: "2023" },
      description:
        "Conception et développement d'une plateforme d'intermédiation entre les clients et les artisans en utilisant la pile MERN",
      subHeading: "Technologies utilisées :  Mongo Db, Express JS, React JS, Node JS",
    },
    {
      title: "Application Mobile | ProfSwap",
      duration: { fromDate: "2023" },
      description: "Conception et développement d'une application mobile pour faciliter la recherche de professeurs universitaires intéressés par des échanges de postes.",
      subHeading: "Technologies utilisées :  Mongo Db, Express JS, React Native, Node JS",
    },
    {
      title: "Application de gestion de restaurant web et mobile",
      duration: { fromDate: "2023" },
      description:
        "Une application de gestion de restaurant développée en utilisant la pile MERN pour les versions web et mobile, dans le but de faciliter la recherche de restaurants pour les clients.",
      subHeading:
        "Technologies utilisées :  Mongo Db, Express JS, React Native, React JS, Node JS ",
    },
  
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Diplôme d'ingénieur d'État"}
        subHeading={"École Nationale des Sciences Appliquées (ENSA), El Jadida"}
        fromDate={"2022"}
        toDate={"2025"}
        description={"Filière : Génie informatique et technologies émergentes"}
      />

      <ResumeHeading
        heading={"Classes préparatoires"}
        subHeading={"École Nationale des Sciences Appliquées (ENSA), El Jadida"}
        fromDate={"2020"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Baccalauréat"}
        subHeading={"Newton International School, Mohammedia"}
        fromDate={"2019"}
        toDate={"2020"}
        description={"Filière : Baccalauréat  Sciences Physiques, option Française"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Stage de fin d'année"}
          fromDate={"08/2023"}
          toDate={"09/2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Conception et développement d'une plateforme visant à numériser les tickets de restauration afin de simplifier le processus de remboursement au sein de l'entreprise "Librairie Papeterie Nationale".          <br/>Technologies utilisées : PHP, Laravel, MySQL, React.js, Bootstrap
          </span>
        </div>
        <div className="experience-description">

        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Stage d'observation"}
          fromDate={"07/2022"}
          toDate={"08/2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          J'ai effectué un stage d'observation au sein du département de tests d'une entreprise multinationale "Lear", un acteur majeur du secteur automobile, située à Sala El Jadida.          </span>
        </div>
        <div className="experience-description">

        </div>
      </div>
      
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"CV"} subHeading={"Mes informations biographiques formelles"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
