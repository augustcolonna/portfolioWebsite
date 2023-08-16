import experienceData from "../utilities/work-experience.json";

function Bio() {
	return (
		<div className="expereience-container">
			{experienceData.map((experience) => {
				return <button>{experience.jobName}</button>;
			})}
		</div>
	);
}

export default Bio;
