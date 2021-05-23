import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '#assets/icons/pngs/flaticon/settings.png';
import IconAndTitle from '#parts/IconAndTitle.jsx';
import BuildingIcon from '#assets/icons/pngs/flaticon/profile-card-icons/building.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
import EmailIcon from '#assets/icons/pngs/flaticon/profile-card-icons/email.png';
import URLIcon from '#assets/icons/pngs/flaticon/profile-card-icons/url.png';
import ProfilePlaceholder from '#assets/icons/pngs/Profile.png';

const StatelessProfileCard = ({ userDetails }) => {
  return (
    userDetails

      ? <div className="profile-card">
          <div className="profile-card-contents">

            <div className="profile-card-picture">
              {
                userDetails.companyLogo

                  ? <img src={userDetails.companyLogo}/>
                  : <img className="placeholder" src={ProfilePlaceholder}/>
              }
            </div>

            <h3 className="profile-card-name">{`${userDetails.fullName || ''}`}</h3>
            <h4>{userDetails.jobRole || ''}</h4>

            <div className="profile-card-bio">

              <IconAndTitle title="Company" icon={BuildingIcon}/>
              <p className="small-paragraph">{userDetails.companyName || ''}</p>

              <IconAndTitle title="Our Mission" icon={RibbonIcon}/>
              <p className="small-paragraph">{userDetails.location || ''}</p>

              <IconAndTitle title="Email" icon={EmailIcon}/>
              <p className="small-paragraph">{userDetails.email || ''}</p>

              <IconAndTitle title="Website" icon={URLIcon}/>
              <p className="small-paragraph">
                <a href={`${userDetails.companyWebsite}`}>
                  {userDetails.companyWebsite || ''}
                </a>
              </p>

            </div>
          </div>

          <Link to="/settings/profile">
            <img src={SettingsIcon} className="settings-icon"/>
          </Link>
        </div>

      : <div>loading...</div>
  );
};

export default StatelessProfileCard;