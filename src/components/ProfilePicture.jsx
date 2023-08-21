import headShotPhoto from "../assets/subject.png";
import "../stylesheets/main-styles.scss";

function ProfilePicture() {
  return (
    <div className="profile-container">
      <div className="head-shot">
        <img src={headShotPhoto} alt="head shot photo" />
      </div>
      <div className="bio">
        <h1>August Colonna, Fullstack Software Developer</h1>
        <p>
          Hello there! My name is August, I am fullstack software developer who
          recently made a career change from software sales. After 4+ years in
          sales, I realized that my passion lies in the technical side of
          software - The actual development of it. <br></br>
          <br></br> Since September 2022 I learned HTML/CSS on my own, completed
          numerous online courses, graduated from a coding bootcamp, and am now
          working as a freelance developer for multiple clients. Please feel
          free to poke around on my site to learn more!{" "}
        </p>
      </div>
    </div>
  );
}

export default ProfilePicture;
