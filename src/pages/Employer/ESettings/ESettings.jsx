import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ENav from '../ENav/ENav.jsx';
// import ProfileEditor from './Profile/ProfileEditor.jsx';
import ProfileEditor from './Profile/StatelessProfileEditor.jsx';
// import AccountEditor from './Account/AccountEditor.jsx';
import AccountEditor from './Account/StatelessAccountEditor.jsx';
import JobReqNotifications from './JobReqNotifications/JobReqNotifications.jsx';
import SettingsNav from './ESettingsNav.jsx';
import EAuth from '../EAuth/EAuth.jsx';

const backend = process.env.BASE_URL;

class ESettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmUsername: '',
      profileUpdateRequestStatus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteAccount = this.handleDeleteAccount.bind(this);
    this.handleConfirmUsername = this.handleConfirmUsername.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount() {
    console.log('settings mounted');

    if (EAuth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/employers/getSingleEmployer`,
        method: 'post',
        headers: {
          token: localStorage.getItem('e-session'),
        },
      })
        .then((response) => {
          console.log(response);

          this.setState({
            redirectToReferrer: true,
            userDetails: response.data,
          }, () => { console.log(this.state); });
        })
        .catch((error) => { return console.log(error); });
    }
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const body = this.state.userDetails;

    console.log('Here is the data you are about to send', body);

    axios({
      url: `${backend}/api/employers/updateEmployerProfile`,
      method: 'post',
      headers: {
        token: localStorage.getItem('e-session'),
      },
      data: body,
    })
      .then((response) => {
        console.log('reponse after posting from settings', response);
        return response.status;
      })
      .then((status) => {
        if (status === 200) {
          this.setState({
            profileUpdateRequestStatus: true,
          }, () => { return console.log(this.state); });
        }
        // window.location.reload();
      });
  }

  handleFileUpload(e) {
    e.preventDefault();

    console.log(e.target.value);

    const formData = new FormData();

    formData.append('empCompanyLogo', e.target.files[0]);

    // to check formData contents

    // for (const key of formData.entries()) {
    //   console.log(`${key[0]}, ${key[1]}`);
    // }

    axios({
      url: `${backend}/api/employers/uploadCompanyLogo`,
      method: 'post',
      headers: {
        token: localStorage.getItem('e-session'),
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        window.location.reload();
      });
  }

  handleDeleteAccount(e) {
    e.preventDefault();

    const { confirmUsername } = this.state;
    const { username } = this.state.userDetails;

    if (confirmUsername === username) {
      const result = window.confirm('are you sure you want to delete your account?');

      if (result === true) {
        console.log('Goodbye!');

        axios({
          url: `${backend}/api/user/deleteAccount`,
          method: 'post',
          headers: {
            token: localStorage.getItem('session'),
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      console.log('usernames do not match. Cannot delete account');
    }
  }

  handleConfirmUsername(e) {
    e.preventDefault();

    this.setState({
      confirmUsername: e.target.value,
    }, () => { console.log(this.state); });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState(
      {
        userDetails: {
          ...this.state.userDetails,
          [e.target.name]: e.target.value,
        },
      },
    );
  }

  render() {
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;
    const { profileUpdateRequestStatus } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='signin'/>
      );
    }

    return (
      userDetails

        ? <div className="settings-page">
            <ENav />

            <div className="settings-container">
              <SettingsNav />


              <div className="settings-selection">
                <Switch>
                  <Route
                    path="/settings/profile"
                    render={(props) => {
                      return (
                      <ProfileEditor
                        {...props}
                        userDetails={userDetails}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        profileUpdateRequestStatus={profileUpdateRequestStatus}
                        handleFileUpload={this.handleFileUpload}
                        />
                      );
                    }}
                  />
                  <Route path="/settings/account"
                  render={(props) => {
                    return (
                      <AccountEditor
                        {...props}
                        userDetails={userDetails}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleDeleteAccount={this.handleDeleteAccount}
                        handleConfirmUsername={this.handleConfirmUsername}
                      />
                    );
                  }

                  }/>
                  <Route path="/settings/jobReqNotifications" component={JobReqNotifications} userDetails={userDetails}/>
                </Switch>
              </div>
            </div>

          </div>
        : <div className="settings-page">
            Loading...
          </div>
    );
  }
}

export default ESettings;