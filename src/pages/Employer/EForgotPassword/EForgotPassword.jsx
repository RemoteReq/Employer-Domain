import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const backend = process.env.BASE_URL;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      statusMessage: '',
      responseStatus: false,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email } = this.state;

    const body = {
      email: email.toLowerCase(),
    };

    axios.post(`${backend}/api/signin/employerForgotPassword`, body)
      .then((response) => {
        console.log('sending email for password recovery!', response);

        if (response.status === 200) {
          console.log(`An email to reset your account password has been sent to: ${email} ${response.status}`);

          this.setState({
            statusMessage: `An email to reset your account password has been sent to: ${email}`,
            responseStatus: true,
          });
        }
      })
      .catch((error) => {
        if (email) {
          console.error('no such email');

          this.setState({
            statusMessage: 'The email you provided is not associated with an account in our records',
            responseStatus: true,
          });
        } else {
          console.error('no email');

          this.setState({
            statusMessage: 'Please provide an email',
            responseStatus: true,
          });
        }
      });
  }

  render() {
    const { statusMessage } = this.state;
    const { responseStatus } = this.state;

    return (
      <div className="forgot-password">

        <form>
          <h4>Employer Password Recovery</h4>

          <br/>
          <p className="small-paragraph">Enter your email address and we will provide you a link to reset your password.</p>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => { this.onChange(e); }}
          ></input>

          <p
            className={`${responseStatus ? 'error' : 'hide'}`}
          >{statusMessage}</p>

          <button
            className="e-button"
            onClick={(e) => { this.handleSubmit(e); }}
          >Request Password Reset</button>

          <p className="small-paragraph">
            Are you a Job Seeker? <a href="https://remotereq.com/forgot-password">Recover your password here</a>
          </p>

        </form>
      </div>
    );
  }
}

export default ForgotPassword;