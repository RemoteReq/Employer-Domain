import React from 'react';
import { Link } from 'react-router-dom';
import TitleAndDivider from '#parts/TitleAndDivider.jsx';
import EMatchRating from '#parts/EMatchRating.jsx';
import EMatchPreview from '#parts/EMatchPreview.jsx';

// first check if they pass first payment
// if true render match list
// if false blanket the match list with a pay button that uses an on:hover effect

const MatchWindow = ({ firstPaymentStatus, matches, job }) => {
  return (
    <div>
      {
        matches
          ? <div>
            {/* <p>Candidates matches for your job req:</p> */}
            <TitleAndDivider title="Candidate matches for your job listing"/>
            <div className="job-viewer-match-list">
            {
              firstPaymentStatus
                ? matches.map((candidate, key) => {
                  return (
                    <EMatchRating
                      percent={candidate.matchingPercentage}
                      candidate={candidate}
                      key={key}
                    />
                  );
                })

                : <div className="match-previews">
                  <div className="obfuscate-previews">
                    <Link
                      to={{
                        pathname: '/firstPayment',
                        state: {
                          jobId: job._id,
                          // price: 100.00,
                        },
                      }}
                      >
                      <button className="button-1 small-button">Show Matches</button>
                    </Link>
                  </div>
                <div>
                <div className="job-viewer-match-list">
                  {
                    matches
                      ? matches.map((candidate, key) => {
                        return (
                        <EMatchPreview
                        percent={candidate.matchingPercentage}
                        candidate={candidate}
                        key={key}
                        />
                        );
                      })

                      : <li>Your matches will appear here</li>
                    }
                </div>
              </div>
          </div>
          }
          </div>
        </div>
          : <li>Your matches will appear here</li>
      }
    </div>
  );
};

export default MatchWindow;