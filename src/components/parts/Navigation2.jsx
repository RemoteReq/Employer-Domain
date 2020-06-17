import React from 'react';
import RemoteReq from '../../../assets/img/RR-cobalt.png';
import ProfileIcon from '../../../assets/img/Profile.png';

const Navigation2 = (props) => {
  let menuVisible;

  if (props.LandingPageMenuVisible === false && screen.width < 481) {
    menuVisible = {
      display: 'none',
    };
  } else {
    menuVisible = {
      display: 'block',
    };
  }

  return (
    <nav className='dashboard-navBar'>
      <div className='dashboard-name-menu'>
        <a className='Dashboard-Home' href="/dashboard">
          <img src={ RemoteReq } className='remotereq-name' alt='remote' />
          <p>Job Board</p>
        </a>
        <div className='dashboard-menu'>
          <label
            htmlFor='toggle'
            className='hamburgerMenu'
            onClick={() => props.menuClick()}
          >&#9776;</label>
        </div>
      </div>
      <div className='dashboard-navBar-links'>
        <a className="dash-nav" href="/joblist"></a>
        <a>
          <img src={ProfileIcon}/>
        </a>
      </div>
    </nav>
  );
};

export default Navigation2;