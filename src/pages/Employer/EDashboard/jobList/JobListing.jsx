import React from 'react';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  console.log(job);

  return (
  <div className="job-listing">

    <Link>
      <div>
        <div className="upper-job-listing">
          <h4 className="job-listing-title">{job.title}</h4>
          {/* <p>Hide Job X</p> */}
        </div>

        <h5>{job.companyName}</h5>

        </div>

        <div className="lower-job-listing">
          <p className="small-paragraph">
            {job.jobDetails}
          </p>
        </div>
    </Link>

  </div>
  );
};

export default JobListing;