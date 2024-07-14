import React, { useState, useEffect } from 'react';
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
    "Étudiant en Génie Informatique et Technologies Émergentes",
    "Développeur Full Stack💻",
    "Développeur MERN Stack💻",
    "Développeur Mobile📱",   
    
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
              <span className="highlighted-text">BELKARRADI Mohammed</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>{text}</h1>

              <span className="profile-role-tagline">
              Bienvenue sur mon portfolio ! Je suis ravi de partager avec vous ma passion pour l'informatique et le développement de logiciels.              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={onContactClick}>
              {" "}
               Me contacter

            </button>
             <a href="resume.pdf" download="CV_BELKARRADI_Mohammed.pdf">
              <button className="btn highlighted-btn">Obtenir mon CV</button>
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
