import { useState } from "react";

import "../stylesheets/main-styles.scss";

function jobCard(props) {
  const { experience, selectSpecificJob } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showJobDetails, setShowJobDetails] = useState(false);

  function toggleShowJobDetails() {
    setShowJobDetails(!showJobDetails);
  }
  return (
    <div className="expereience-information">
      <h3 className="job-name">{experience.jobName}</h3>
      <button
        className={"job-button"}
        onClick={() => {
          selectSpecificJob(experience._id);
          toggleShowJobDetails();
        }}
      >
        {showJobDetails ? "Less" : "More"}
      </button>
      {showJobDetails ? (
        <div className="job-details">
          <ul>
            <li>{experience.company}</li>
            <li>{experience.location}</li>
            <li>{experience.time}</li>
          </ul>
          <p>{experience.skillsGained}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default jobCard;
