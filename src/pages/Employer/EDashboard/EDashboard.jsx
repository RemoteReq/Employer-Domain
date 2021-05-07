import React, { Component } from 'react';
import {
  Redirect, Switch, Route,
} from 'react-router-dom';
import axios from 'axios';
import ENav from '../ENav/ENav.jsx';
import Pricing from './Pricing.jsx';
import StatelessProfileCard from './StatelessProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import EAuth from '../EAuth/EAuth.jsx';

const backend = process.env.BASE_URL;

class EDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobReqs: [],
      profileMenuDropdown: false,
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.showProfileMenu = this.showProfileMenu.bind(this);
  }

  componentDidMount() {
    // check session status on visit
    console.log('checking auth status...', EAuth.isAuthenticated());
    if (EAuth.isAuthenticated()) {
      // request user details based off token

      console.log('retrieving employer details... ');

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
          }, () => { return console.log('employer details retrieved!', this.state); });
        })
        .catch((error) => {
          EAuth.logout(() => {
            this.props.history.push('/sign-in');
          });

          return error;
        })
        .catch((error) => { return console.log(error); });

      axios({
        url: `${backend}/api/employers/joblistByEmployer`,
        method: 'post',
        headers: {
          token: localStorage.getItem('e-session'),
        },
      })
        .then((response) => {
          console.log(response);

          this.setState((prevState) => {
            return {
              ...prevState,
              jobReqs: response.data,
            };
          }, () => { console.log(this.state); });
        });
    }
  }

  showProfileMenu() {
    this.setState({ profileMenuDropdown: !this.state.profileMenuDropdown });
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  render() {
    document.title = 'Dashboard';
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;
    const { jobReqs } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='sign-in'/>
      );
    }

    return (
      <div>
        <ENav
          showProfileMenu={ this.showProfileMenu }
          updateRedirect={this.updateRedirect}
        />

        <div className='dashboard'>
          <StatelessProfileCard userDetails={userDetails}/>

          <div>
            <Pricing />

            <JobList jobReqs={jobReqs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EDashboard;