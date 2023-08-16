import experienceData from "../utilities/work-experience.json";
import { useState } from "react";

function Bio() {
	const [showJobDetails, setShowJobDetails] = useState(true);

	function toggleShowJobDetails() {
		setShowJobDetails(!showJobDetails);
	}

	return (
		<div className="expereience-container">
			{experienceData.map((experience) => {
				return (
					<button onClick={toggleShowJobDetails} key={"_id"}>
						{experience.jobName}
					</button>
				);
			})}
			<div>
				{showJobDetails
					? experienceData.map((experience) => {
							return <p key={"_id"}>{experience.company}</p>;
					  })
					: ""}
			</div>
		</div>
	);
}

export default Bio;
