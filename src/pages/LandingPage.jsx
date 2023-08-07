// import React from "react";
import "../stylesheets/LandingPage.scss";

function LandingPage() {
  return (
    <div className="nav">
      <ul>
        <li className="vorname animate__animated animate__slideInLeft">
          <div>August</div>
        </li>
        <li className="projects animate__animated animate__flipInX">
          <div>Projects</div>
        </li>
        <li className="about-me animate__animated animate__flipInX">
          <div>About Me</div>
        </li>
        <li className="contact animate__animated animate__flipInX">
          <div>Contact</div>
        </li>
        <li className="surname animate__animated animate__slideInRight">
          <div>Colonna</div>
        </li>
      </ul>
    </div>
  );
}

export default LandingPage;
