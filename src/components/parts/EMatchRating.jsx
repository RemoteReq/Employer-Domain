import React from 'react';
import { Link } from 'react-router-dom';

const EMatchRating = ({ percent, candidate }) => {
  const candidateInitials = candidate.fullName.split(' ').map((n) => { return n[0]; }).join(' ');

  return (
    <div className="match-rating">
      <Link
        to={{
          pathname: `/match/${candidate.candidateId}`,
          state: {
            candidate,
          },
        }}
        >
        <div className={`c100 p${percent}`}>
          <span>
            <div className="match-label">
              <p>{candidateInitials}</p>
              <p>{percent}%</p>
            </div>
          </span>
          <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EMatchRating;