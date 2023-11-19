import React, { useState, useEffect } from 'react';
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  const onContactClick = () => {
    let screenComponent = document.getElementById("Contact Me");
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
  };
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const phrases = [
    "Computer Engineering Student💻",
    "Full Stack Developer💻",
    "MERN Stack Developer💻",
    "React/React Native Developer📱",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[index]);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/mohammed-belkarradi-770954211/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/BELKARRADI">
                <i className="fa fa-github-square"></i>
              </a>
            
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">BELKARRADI Mohammed</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>{text}</h1>

              <span className="profile-role-tagline">
                Welcome to my Portfolio Website! I'm sharing with you my passion for IT and software development 
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={onContactClick}>
              {" "}
              Contact Me
            </button>
             <a href="resume.pdf" download="CV_BELKARRADI_Mohammed.pdf">
              <button className="btn highlighted-btn">Get My Resume</button>
            </a> 
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
