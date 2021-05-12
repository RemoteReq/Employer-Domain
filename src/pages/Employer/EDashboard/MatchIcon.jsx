import React from 'react';
import { Link } from 'react-router-dom';

const MatchIcon = ({ candidate }) => {
  const candidateInitials = candidate.fullName.split(' ').map((n) => { return n[0]; }).join(' ');

  return (
    <Link
      to={{
        pathname: `/match/${candidate._id}`,
        state: {
          candidate,
        },
      }}
    >
      <div className="match-icon">
        <p>{candidateInitials}</p>
      </div>
    </Link>
  );
};

export default MatchIcon;