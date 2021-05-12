import React from 'react';
import { Link } from 'react-router-dom';
import JobBadges from '#parts/JobBadge.jsx';

const JobListing = ({ job }) => {
  console.log(job);

  const previewDetails = job.jobDetails.substring(0, 128);

  return (
  <div className="employer-job-listing">
    <Link
      to={{
        pathname: `/jobs/${job._id}`,
        state: {
          job,
        },
      }}
    >
      <div>
        <div className="upper-job-listing">
          <h4 className="job-listing-title">{job.title}</h4>
          {
            job.matchesCandidateCount > 0
              ? <div className="job-listing-alerts">
                <div className="matched-badge">
                  <p>Matched</p>
                </div>

                <div className={`${job.expireStatus === true && job.hiringPaymentStatus === null ? 'job-expire-status' : 'hide'}`}>
                  <p>
                    !
                  </p>
                </div>
              </div>

              : <div></div>
          }
        </div>

        <h5>{job.companyName}</h5>
        <p className="small-paragraph">
          {previewDetails}
        </p>
        <JobBadges availability={job.availability} jobType={job.jobType}/>
      </div>
    </Link>
  </div>
  );
};

export default JobListing;