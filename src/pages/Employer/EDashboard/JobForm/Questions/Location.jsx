import React from 'react';
import Select from 'react-select';
import locations from '#assets/inputs/new/new-locations.js';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import Preloader from '#components/svgs/Preloader.jsx';

const Location = ({
  job, goPrev, handleChange, handleSelect, addJob, preloaderState,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <p>Time Zone</p>
        <TimeZoneSelector value={job.timeZone} handleChange={handleChange}/>
      </div>

      <div className="question">
        <p>State</p>
        <Select
          name="location"
          value={locations.filter((location) => { return location.value === job.location; })}
          onChange={handleSelect}
          options={locations}
        />
      </div>

      <div className="question">
        <p>Zip Code</p>
        <input
          value={job.zipCode}
          type="number"
          name="zipcode"
          onChange={handleChange}
        />
      </div>

      <div className={`form-preloader ${preloaderState ? 'show' : 'hide'}`}>
          <Preloader color="blue" />
        </div>

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev
        </button>

        <button
          className="button-next"
          onClick={addJob}
        >Submit &raquo;
        </button>
      </div>
    </div>
  );
};

export default Location;