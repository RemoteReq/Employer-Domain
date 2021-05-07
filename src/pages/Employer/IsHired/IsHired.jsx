import React, { Component } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import EAuth from '../EAuth/EAuth.jsx';

// Mimics Verify and EVerify actions which uses wrapper functional components
// that query the URL for parameters

const IsHiredQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const IsHired = () => {
  const query = IsHiredQuery();

  return (
    <IsHiredPoster hireStatus={query.get('status')} jobId={query.get('jobId')}/>
  );
};

class IsHiredPoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusUpdateConfirmation: false,
    };
  }

  componentDidMount() {
    const { hireStatus } = this.props;
    const { jobId } = this.props;

    EAuth.getJobHireStatus(hireStatus, jobId, () => {
      setTimeout(() => {
        this.setState({
          statusUpdateConfirmation: true,
          hireStatus,
        });
      }, 2000);
    });
  }

  render() {
    const { statusUpdateConfirmation } = this.state;
    const { hireStatus } = this.state;

    console.log(this.state);

    if (statusUpdateConfirmation === true) {
      if (hireStatus === 'true') {
        return (
            <div>
              <Redirect
                to={{
                  pathname: '/secondPayment',
                  state: {
                    jobId: this.props.jobId,
                  },
                }}
              />
            </div>
        );
      }

      return (
        <div>
          <Redirect
            to={{
              pathname: '/dashboard',
            }}
            />
        </div>
      );
    }
    return (
        <div className="verify-page">
          <div className="notice">
            <p className="small-paragraph">
              Processing your hiring request . . .
            </p>

            <div>
              <p className="small-paragraph">
                If you&apos;re not redirected,&nbsp;
                <Link to={{
                  pathname: '/dashboard',
                }}>
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        </div>
    );
  }
}
export default IsHired;