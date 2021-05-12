import React, { Component } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const backend = process.env.BASE_URL;

const ResetPasswordQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ResetPasswordWrapper = () => {
  const query = ResetPasswordQuery();

  return (
    <ResetPassword resetPasswordID={query.get('resetToken')} />
  );
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      statusMessage: '',
      responseStatus: false,
      returnToSignIn: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      // Request should only be sent if the passwords match
      console.log('Sending password reset request');

      const body = {
        newPassword: confirmPassword,
      };

      axios.post(`${backend}/api/signin/employerResetPassword?resetToken=${this.props.resetPasswordID}`, body)
        .then((res) => {
          console.log(res);

          this.setState({
            statusMessage: 'Password reset successfully!',
            returnToSignIn: true,
            responseStatus: true,
          });
        })
        .catch((err) => {
          console.log(err);

          this.setState({
            statusMessage: 'Please enter new passwords',
            responseStatus: true,
          });
        });
    } else {
      // When they passwords do no match, highlight the inputs in red
      console.log('Passwords do not match');

      this.setState({
        statusMessage: 'Passwords do not match.',
        responseStatus: true,
      });
    }
  }

  render() {
    const { statusMessage } = this.state;
    const { responseStatus } = this.state;
    const { returnToSignIn } = this.state;

    return (
      <div className="reset-password">

        <form>
          <p className="small-paragraph">
            Please enter your new password and confirm it.
          </p>

          <input
            name="password"
            type="password"
            placeholder="New Password"
            onChange={(e) => { this.onChange(e); }}
          >
          </input>

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            onChange={(e) => { this.onChange(e); }}
          >
          </input>

          <p
            className={`${responseStatus ? 'error' : 'hide'}`}
          >{statusMessage}</p>

          <p className={`small-paragraph ${returnToSignIn ? 'show' : 'hide'}`}>
              Return to Sign In <Link to="/sign-in">Here</Link>
          </p>

          <button
            className="e-button"
            onClick={(e) => { this.onClick(e); }}
          >Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPasswordWrapper;