// import React from "react";
import headShotPhoto from "../assets/subject.png";
import "../stylesheets/hello.scss";
import Bio from "./Bio";
function Hello() {
	return (
		<div className="main-container">
			<div className="my-links">
				<ul>
					<li>LinkedIn</li>
					<li>Git Hub</li>
					<li>Resume | CV</li>
				</ul>
			</div>
			<Bio />
			<div className="hello-container">
				<div className="head-shot">
					<img src={headShotPhoto} alt="head shot photo" />
				</div>
			</div>
		</div>
	);
}

export default Hello;
