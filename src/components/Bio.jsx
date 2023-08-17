import experienceData from "../utilities/work-experience.json";
import { useState } from "react";

function Bio() {
	const [showJobDetails, setShowJobDetails] = useState(false);
	const [job, setJob] = useState(experienceData);

	function toggleShowJobDetails() {
		setShowJobDetails(!showJobDetails);
	}

	function selectSpecificJob(jobId) {}

	return (
		<div className="expereience-container">
			{experienceData.map((experience) => {
				return (
					<div key={"_id"}>
						<button onClick={toggleShowJobDetails}>{experience.jobName}</button>
						<div>{showJobDetails ? "Hide" : ""}</div>
					</div>
				);
			})}
		</div>
	);
}

export default Bio;
