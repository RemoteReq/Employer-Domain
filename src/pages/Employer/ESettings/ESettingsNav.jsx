import React from 'react';
import { Link } from 'react-router-dom';

const SettingsNav = () => {
  return (
    <div className="sideNav">
      <Link to="/settings/profile">
        <button>
            Profile
        </button>
      </Link>

      <Link to="/settings/account">
        <button>
            Account
        </button>
      </Link>
    </div>
  );
};

export default SettingsNav;