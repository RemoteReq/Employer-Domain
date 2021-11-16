import React from 'react';
import Select from 'react-select';
import jobTitles from '#assets/inputs/new/new-job-titles.js';
import causes from '#assets/inputs/new/new-causes.js';

const Basics = ({
  job, goNext, handleChange, handleSelect,
}) => {
  console.log(job);

  return (
    <div className="job-form">

      <div className="question">
        <p>Job Title</p>
        <Select
          name="title"
          value={jobTitles.filter((title) => { return title.value === job.title; })}
          onChange={handleSelect}
          options={jobTitles}
          />
      </div>

      <div className="question">
        <p>Company Name</p>
        <input
          value={job.companyName}
          placeholder="ex: RemoteReq"
          name="companyName"
          onChange={handleChange}
          />
      </div>

      <div className="question">
        <p>What cause does your company work on?</p>
        <Select
          name="cause"
          value={causes.filter((cause) => { return cause.value === job.cause; })}
          onChange={handleSelect}
          options={causes}
          />
      </div>

      <div className="question">
        <p>Job Details</p>
        <div className="textarea-div">
          <textarea
            placeholder="ex: RemoteReq is looking for a new UX Developer to lead in creating a responsive mobile app for RemoteReq.com!"
            className="aboutMe"
            name="jobDetails"
            value={job.jobDetails}
            onChange={handleChange}
            />
        </div>
      </div>

      <div className="job-form-nav-buttons">
        <div></div>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Basics;