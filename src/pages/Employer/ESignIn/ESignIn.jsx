import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';
import EAuth from '../EAuth/EAuth.jsx';
import PasswordField from '#parts/PasswordField.jsx';
import Preloader from '#components/svgs/Preloader.jsx';

class ESignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      signUpInProgress: false,
    };

    this.updateInfoOnChange = this.updateInfoOnChange.bind(this);
    this.login = this.login.bind(this);
    this.enablePreloader = this.enablePreloader.bind(this);
  }

  componentDidMount() {
    const Footer = document.getElementById('footer');
    Footer.classList.add('hide');

    console.log(EAuth.isAuthenticated());
    if (EAuth.isAuthenticated()) {
      this.setState({
        redirectToReferrer: true,
      });
    }
  }

  componentWillUnmount() {
    const Footer = document.getElementById('footer');
    Footer.classList.remove('hide');
    Footer.classList.add('show');
  }

  enablePreloader() {
    this.setState({
      signUpInProgress: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          signUpInProgress: false,
        });
      }, 2000);
    });
  }

  login(e) {
    e.preventDefault();

    this.enablePreloader();

    const { username } = this.state;

    let user;

    if (username.includes('@')) {
      user = username.toLowerCase();
      console.log(user);
    } else {
      user = username;
    }

    const body = {
      emailOrUserName: user,
      password: this.state.password,
    };

    EAuth.login(body, () => {
      this.setState({
        redirectToReferrer: true,
      });
    }, () => {
      this.setState({
        loginFailed: true,
      });
    });
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
      loginFailed: false,
    });
  }

  render() {
    const { signUpInProgress } = this.state;
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return (
        <Redirect to="dashboard" />
      );
    }

    return (
      <div className="e-signin">
      <Helmet>
        <title>Employer Sign-In | RemoteReq</title>
        <meta
          name="description"
          content="Sign-in to see the best candidates that share your mission. Find out who your matches are!"
        />
      </Helmet>

      <div className="e-signin-container" >
        <h4>Hire better with RemoteReq.</h4>

        <form className="e-signin-form" >
          <div className={`form-preloader ${signUpInProgress ? 'show' : 'hide'}`}>
            <Preloader color="yellow"/>

            <p>Signing you in</p>
          </div>

          <h3>Employer Sign In</h3>

          <br/>

          <input
            name="username"
            autoComplete="current-username"
            className="e-signin-email"
            onChange={ this.updateInfoOnChange }
            placeholder="Username or Email" />

          <PasswordField
            onChange={this.updateInfoOnChange}
          />

          {/* <input
            type="password"
            name="password"
            autoComplete="current-password"
            className="login-password"
            onChange={ this.updateInfoOnChange }
            placeholder="Password" /> */}

          <p className={
              `error ${this.state.loginFailed ? 'show' : 'hide'}`
            }>
              Incorrect Username/Email OR Password
          </p>
          <button onClick={ this.login }
                  className="e-button"
          >Sign in
          </button>

          <p className="small-paragraph">
            Are you a job seeker? <a href="https://remotereq.com/sign-in">Sign In Here</a>
          </p>

          <p className="small-paragraph">
            Don&apos;t have an account? <Link to="/sign-up" className="small-link">Sign Up</Link>
          </p>

          <p className="small-paragraph">
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>

        </form>
      </div>
    </div>
    );
  }
}

export default ESignIn;