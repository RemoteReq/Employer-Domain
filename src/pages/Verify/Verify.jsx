import React, { Component } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';

import Auth from '../../components/Auth/Auth.jsx';

const verifyQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Verify = () => {
  const query = verifyQuery();

  return (
    <VerifyPoster verifyID={query.get('id')}/>
  );
};


class VerifyPoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verifyStatus: false,
    };
  }

  componentDidMount() {
    Auth.verify(this.props.verifyID,
      () => {
        setTimeout(() => {
          this.setState({
            verifyStatus: true,
          });
        }, 2000);
      });
  }

  render() {
    const { verifyStatus } = this.state;

    return (

      verifyStatus
        ? <div>
        <Redirect to="/signin" />
      </div>
        : <div className="verify-page">
      <div className="notice">
        <p className="small-paragraph">
          Processing your verification request . . .
        </p>

        <div>
          <p className="small-paragraph">
            If you&apos;re not redirected,&nbsp;
            <Link to="/signin">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default Verify;