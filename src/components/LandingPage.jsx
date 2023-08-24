// import React from "react";
import "../stylesheets/main-styles.scss";
import Experience from "./Experience";
import NavBar from "./NavBar";
import ProfilePicture from "./ProfilePicture";

function LandingPage() {
  return (
    <div className="main-container">
      <NavBar />
      <ProfilePicture />
      <Experience />
    </div>
  );
}

export default LandingPage;
