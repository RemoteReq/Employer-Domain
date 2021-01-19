import React from 'react';
import { Link } from 'react-router-dom';
import { locations, salaries } from '#assets/inputs/inputs';
import SkillBank from '#parts/SkillBank.jsx';
import EducationSelector from '#parts/EducationSelector.jsx';
import CauseSelector from '#parts/CauseSelector.jsx';

import ENav from '../../ENav/ENav.jsx';

const FullTimeForm = ({
  jobData, fields, handleChange, addJob, addToList, removeFromList, handleFileUpload, handleNumber, companyLogo,
}) => {
  return (
    <div className="add-job">
    <ENav />

    <form className="job-form">
      <h4>Add Job</h4>

      <div className="grid-1fr-1fr spaced">

        <div>
          <label>Job Title</label>
          <input
            placeholder="ex: UX Developer"
            name="title"
            onChange={handleChange}
          />
          <p className={`${fields.title.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <label>Company Name</label>
          <input
            placeholder="ex: RemoteReq"
            name="companyName"
            onChange={handleChange}
          />
          <p className={`${fields.companyName.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <label>What cause does your company work on?</label>
          <CauseSelector name="cause" handleChange={handleChange}/>
          <p className={`${fields.cause.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <label>Job Details</label>
          <div className="textarea-div">
          <textarea
            placeholder="ex: RemoteReq is looking for a new UX Developer to lead in creating a responsive mobile app for RemoteReq.com!"
            className="aboutMe"
            name="jobDetails"
            onChange={handleChange}
            />
          </div>
          <p className={`${fields.jobDetails.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <label>Key Skills</label>
          <SkillBank addToList={addToList} removeFromList={removeFromList} myKeySkills={jobData.keySkills}/>

          <label>Soonest Join Date for Job</label>
            <br/>
            <input
              name="soonestJoinDate"
              onChange={handleChange}
              type="date"
            />

            <p className="small-paragraph">{jobData.jobDescription ? jobData.jobDescription.name : ''}</p>
            <div className="upload-button">
              <button className="button-2">Upload a job description</button>
              <input
                type="file"
                name="jobDescription"
                accept="application/pdf,application/vnd.ms-excel"
                onChange={(e) => { return handleFileUpload(e); }}
                />
            </div>
        </div>

        <div>
          <label>Company Logo</label>
          <div className="image-box">
            <img src={companyLogo || ''}/>
          </div>

          <label>Company Website</label>
          <input
              readOnly
              defaultValue={jobData.companyWebsite}
            />

          <label>Salary</label>
          <div className="select">
            <select
            type="number"
            name="salary"
            onChange={handleChange}
            >
              <option>-----</option>
                {
                  salaries.map((salary, key) => {
                    return (
                      <option value={salary.value} key={key}>{salary.option}</option>
                    );
                  })
                }
            </select>
            <p className={`${fields.salary.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>
          </div>

          <div className="range">
            <label>Minimum Years of Experience Required</label>
            <input
              type="number"
              name="minExperience"
              onChange={handleNumber}
            />
            <p className={`${fields.minExperience.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

            <label>Maximum Years of Experience Required</label>
            <input
              type="number"
              name="maxExperience"
              onChange={handleNumber}
            />
            <p className={`${fields.maxExperience.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>
          </div>

          <EducationSelector handleChange={handleNumber} name="requiredEducationLevel"/>
          <p className={`${fields.requiredEducationLevel.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <div className="select">
            <label>State</label>
            <select name="location" onChange={handleChange}>
              <option>-----</option>
              {
                locations.map((state, i) => {
                  return (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  );
                })
              }
            </select>
            <p className={`${fields.location.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>
          </div>

          <div className="notification-settings">
              <h3>Notification Settings</h3>
              <p className="small-paragraph">
                We'll send you e-mail notifcations around these candidate-matching parameters.
              </p>

              <div className="sliders">
                <label>Number of Candidates</label>
                <div className="slider">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    name="numberOfCandidate"
                    defaultValue="1"
                    onChange={handleNumber}
                    />
                  <input
                    value={jobData.numberOfCandidate}
                    readOnly
                    />
                </div>

                <label>Percentage Match</label>
                <div className="slider">
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="1"
                  name="percentageMatch"
                  defaultValue="50"
                  onChange={handleNumber}
                  />
                <input
                  value={`${jobData.percentageMatch} %`}
                  readOnly
                  />

                <label>Show candidates that are eligible to work in the United States</label>
                <input
                  type="checkbox"
                  name="eligibleToWorkInUS"
                  value={true}
                  onChange={handleChange}
                />

                <label>Show candidates that are fluent in English</label>
                <input
                  type="checkbox"
                  name="fluentInEnglish"
                  value={true}
                  onChange={handleChange}
                />
                </div>
              </div>
            </div>

        </div>
      </div>

      <div className="form-handler">
        <Link to="/employer/firstPayment">
          <button
            className="button-1"
            onClick={addJob}
            >Save job Req</button>
        </Link>
      </div>
    </form>
  </div>
  );
};

export default FullTimeForm;