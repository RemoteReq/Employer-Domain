import React from 'react';
import Divider from '#parts/Divider.jsx';

const StatelessProfileEditor = ({
  userDetails, handleChange, handleSubmit, handleFileUpload,
}) => {
  document.title = 'Your Profile';

  return (
    <div className="profile-editor">
      <h3>Your Profile</h3>

      <Divider />

      <form>
        <div>
          <label>Name</label>
          <input
            name="fullName"
            // defaultValue={`${userDetails.fullName || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>About</label>
          <div className="textarea-div">
            <textarea
              name="aboutMe"
              // defaultValue={`${userDetails.aboutMe}` || ''}
              onChange={(e) => { handleChange(e); }}
              />
          </div>

          <label>LinkedIn URL</label>
          <input
            name="linkedInURL"
            // defaultValue={`${userDetails.linkedInURL}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Github URL</label>
          <input
            name="githubURL"
            // defaultValue={`${userDetails.githubURL}`}
            onChange={(e) => { handleChange(e); }}
          />

          {/* <label>Twitter Handle</label>
          <input
            name=""
            onChange={(e) => { handleChange(e); }}
          /> */}

          <label>Employer URL</label>
          <input
            name="personalURL"
            // defaultValue={`${userDetails.personalURL}`}
            onChange={(e) => { handleChange(e); }}
          />

          <button
            className="button-1"
            onClick={(e) => { return handleSubmit(e); }}
          >Update</button>
        </div>

        <div className="image-column">

          <label>Profile Picture</label>
          <div className="image-box">
            <img src={userDetails.profilePicUrl}/>
          </div>

          <input
            className="button-1"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => { return handleFileUpload(e); }}
          />
        </div>
      </form>

    </div>
  );
};

export default StatelessProfileEditor;