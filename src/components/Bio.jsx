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
			<button onClick={toggleShowJobDetails} id={'000'}>Web and App Development</button>
			<div><h2></h2></div>
			<button>Account Executive</button>
			<button>Account Executive</button>
			<button>Assistant Coach</button>
			<button>Research Assistant</button>
			
			
			
			{/* {experienceData.map((experience) => {
				return (
					<div key={"_id"}>
						<button onClick={toggleShowJobDetails}>{experience.jobName}</button>
						<div>{showJobDetails ? "Hide" : ""}</div>
					</div>
				);
			})} */}
		</div>
	);
}

export default Bio;
