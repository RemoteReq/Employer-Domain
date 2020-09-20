import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '#parts/Radio.jsx';

const Page3 = ({ handleChange, keySkills }) => {
  return (
    <div className="QnA-page">
      <p>Your experience</p>
      <p>
        Give a brief description of a project you have worked on that are relevant to this position.
      </p>

      <div className="textarea-div">
        <textarea/>
      </div>

      <p>
        Provide a sample of your past relevant work (e.g. link to an online portfolio or image)
      </p>
      <input/>

      <p>
        All of our jobs are remote. Do you have access to (e.g. a computer, internet connection, a telephone and a private space) to work remotely?
      </p>

      <div className="radios">
        <Radio value={true} label="yes" name="" handler={handleChange}/>

        <Radio value={false} label="no" name="" handler={handleChange}/>
      </div>

      <select>
        {
          keySkills.map((skill, key) => {
            return (
            <option key={key}>{skill}</option>
            );
          })
        }
      </select>

      <div className="form-nav">
        <Link to="/QnA/2">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/QnA/4">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>


    </div>
  );
};

export default Page3;