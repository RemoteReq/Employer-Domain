import React from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';
import Checkbox from '#parts/Checkbox.jsx';

const GigSelect = () => {
  return (
    <div className="gig-select-page">
      <ENav />

      <form>
        <p>What kind of job is this?</p>

        <br/>
        <br/>

        <div className="checkbox-group">
          <Checkbox label="Remote" />
          <Checkbox label="Flexible" />
          <Checkbox label="On-site" />
        </div>

        <br/>
        <br/>

        <p>Are you hiring full time or part time?</p>

        <div className="gig-select">
          <Link
            className="gig-select-choice"
            to={{
              pathname: '/job-form-2',
              state: { price: 100.00, afterHirePrice: 2500.00, jobType: 'Full Time' },
            }}
          >
              <button className="button-1" >Full Time</button>
          </Link>

          <Link
            className="gig-select-choice"
            to={{
              pathname: '/job-form-2',
              state: { price: 100.00, afterHirePrice: 1000.00, jobType: 'Part Time' },
            }}
          >
              <button className="button-1" >Part Time</button>
          </Link>
        </div>

      </form>

    </div>
  );
};

export default GigSelect;