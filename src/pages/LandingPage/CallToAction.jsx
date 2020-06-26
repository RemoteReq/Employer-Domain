import React from 'react';
import { Link } from 'react-router-dom';
import WebFooter from '../../components/parts/WebFooter.jsx';

const CallToAction = () => (
  <WebFooter 
  header={"Don't just work, do something greater"}
  graphics={true}
  component={
    <div>
      <Link to="/signup">
        <button className='button-1'>Find Jobs</button>
      </Link>

      <Link to="/findTalent">
        <button className='button-2'>Find Talent</button>
      </Link>
    </div>
  }
  />
);

export default CallToAction;