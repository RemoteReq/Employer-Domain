import React from 'react';
import { Link } from 'react-router-dom';
import JobListing from './JobListing.jsx';

const JobList = ({ jobReqs }) => {
  if (jobReqs) {
    if (jobReqs.length === 0) {
      return (
        <EReminder />
      );
    }
    return (
      <MappedReqs jobReqs={jobReqs} />
    );
  }
  return (
    <div>
      Retrieving Your Job Reqs . . .
    </div>
  );
};

const MappedReqs = ({ jobReqs }) => {
  return (
    <div className='jobList'>

      <div className="job-list-header">
        <h3>Your Jobs</h3>

        <Link to="/gig-select-2">
          <button className="button-1 small-button">
            Post a job
          </button>
        </Link>
      </div>

      <div className="jobs">
      {
        jobReqs.map((jobReq, index) => {
          return (
            <JobListing job={jobReq} key={index} />
          );
        })
      }
      </div>

    </div>
  );
};

const CompleteProfileReminder = () => {
  return (
    <div className="jobList">

    </div>
  );
};

const EReminder = () => {
  return (
    <div className='jobList'>

    <div className="job-list-header">
      <h3>Your Jobs</h3>

      <Link to="/gig-select-2">
        <button className="button-1 small-button">
          Post a job
        </button>
      </Link>

    </div>

    <div className="await-jobReqs">

      {/* <div className="await-jobReqs-icon">
        <img />
      </div> */}

      <h4>
        Get started by submitting Job Reqs!
      </h4>

      <p className="small-paragraph">
        The sooner your post job reqs, the sooner we can match you to your ideal job candidate!
      </p>
    </div>
  </div>
  );
};


export default JobList;