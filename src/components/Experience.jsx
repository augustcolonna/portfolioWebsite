import experienceData from "../utilities/work-experience.json";
import { useState } from "react";
import JobCard from "./JobCard";

function Bio(props) {
	const [job, setJob] = useState(experienceData);
	// eslint-disable-next-line react/prop-types
	const { toggleTheme } = props;

	function selectSpecificJob(jobId) {
		const filterJobs = job.filter((job) => {
			return job._id === jobId;
		});
		setJob(filterJobs);
	}

	return (
		<div className="experience-container">
			<h2 className="job-experience header">Experience</h2>
			{experienceData.map((experience) => {
				return (
					<JobCard
						key={experience._id}
						experience={experience}
						selectSpecificJob={selectSpecificJob}
						toggleTheme={toggleTheme}
					/>
				);
			})}
		</div>
	);
}

export default Bio;
