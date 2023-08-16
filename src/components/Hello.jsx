// import React from "react";
import headShotPhoto from "../assets/subject.png";
import "../stylesheets/hello.scss";
import Bio from "./Bio";
function Hello() {
	return (
		<div className="main-container">
			<div className="top-banner">
				<h1>August Colona, Fullstack Software Developer</h1>
				<ul>
					<li>LinkedIn</li>
					<li>Git Hub</li>
					<li>Resume | CV</li>
				</ul>
			</div>

			<div className="hello-container">
				<div className="head-shot">
					<img src={headShotPhoto} alt="head shot photo" />
				</div>
				<Bio />
			</div>
		</div>
	);
}

export default Hello;
