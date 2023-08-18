import experienceData from "../utilities/work-experience.json";
import { useState } from "react";
import JobCard from "./JobCard";

function Bio() {
	const [job, setJob] = useState(experienceData);

	function selectSpecificJob(jobId) {
		const filterJobs = job.filter((job) => {
			return job._id === jobId;
		});
		setJob(filterJobs);
	}

	return (
		<div className="expereience-container">
			{experienceData.map((experience) => {
				return (
					<JobCard
						key={experience._id}
						experience={experience}
						selectSpecificJob={selectSpecificJob}
					/>
				);
			})}
		</div>
	);
}

export default Bio;
