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
    { label: "Education", logoSrc: "education.svg" },
    { label: "Professional Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "PHP" },
    { skill: "React JS" },
    { skill: "React Native" },
    { skill: "Laravel" },
    { skill: "Express JS" },
    { skill: "Node JS" },
    { skill: "Oracle" },
    { skill: "MySQL" },
    { skill: "Python" },
    { skill: "java" },
    { skill: "Mongo Db" },
  ];

  const projectsDetails = [
    {
      title: "End-of-year project (PFA) | ArtiZone",
      duration: { fromDate: "2023"},
      description:
        "Design and development of a social intermediary platform for artisans using the MERN Stack.",
      subHeading: "Technologies Used:  Mongo Db, Express JS, React JS, Node JS",
    },
    {
      title: "Mobile Application | ProfSwap",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "design and dev of A mobile application has been developed to facilitate the search for university professors interested in job exchanges.",
      subHeading:  "Technologies Used:  Mongo Db, Express JS, React Native, Node JS",
    },
    {
      title: "Web and mobile restaurant management application  ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
      "A restaurant management application developed using the MERN stack for both web and mobile versions, with the aim of facilitating restaurant search for customers.",
      subHeading:
      "Technologies Used:  Mongo Db, Express JS, React Native,React JS, Node JS ",
    },
    {
      title: "Managing routes App ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "An application has been developed to simplify the search for the shortest route between all Shell stations, taking into account both distances and traffic constraints.",
      subHeading: "Technologies Used: Python, PyQt5",
    },
  
  
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"State engineer diploma"}
        subHeading={"National School of Applied Sciences (ENSA), El Jadida"}
        fromDate={"2022"}
        toDate={"2025"}
        description={"Field : Computer engineering and emerging technologies"}
      />

    
      <ResumeHeading
        heading={
          "Preparatory classes"
        }
        subHeading={"National School of Applied Sciences (ENSA), El Jadida"}
        fromDate={"2020"}
        toDate={"2022"}
        
      />
      <ResumeHeading
        heading={"Baccalaureate"}
        subHeading={"Newton International School, Mohammedia"}
        fromDate={"2019"}
        toDate={"2020"}
        description={"Field : Scientific Baccalaureate, French option"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Observation internship"}
          fromDate={"07/2022"}
          toDate={"08/2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          I completed an observation internship at the testing department of a multinational company called "Lear" located in Sala El Jadida.
          </span>
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
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
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
