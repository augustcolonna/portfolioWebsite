import { useState } from "react";

function jobCard(props) {
  const { experience, selectSpecificJob } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showJobDetails, setShowJobDetails] = useState(false);

  function toggleShowJobDetails() {
    setShowJobDetails(!showJobDetails);
  }
  return (
    <div className="expereience-information">
      <h2>{experience.jobName}</h2>
      <button
        onClick={() => {
          selectSpecificJob(experience._id);
          toggleShowJobDetails();
        }}
      >
        See More
      </button>
      {showJobDetails ? (
        <div>
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
