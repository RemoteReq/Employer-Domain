import React, { Component } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import Auth from '../../components/Auth/Auth.jsx';
import QnABreadcrumb from './QnABreadcrumb.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import Page5 from './pages/Page5.jsx';
import {
  salaries, causes, degrees, timeZones, keySkills,
} from '#assets/inputs/inputs';

const backend = 'http://3.21.186.204:3030';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobType: 'either', // if part time, render part time QnA. if full time render full time QnA
      progress: 1, // the amount of questions answered
      cause1: '',
      cause2: '',
      cause3: '',
      keySkills: [],
      eligibleToWorkInUS: '',
      soonestJoinDate: '',
      fluentInEnglish: '',
      highestEducationLevel: '',
      jobChangeReason: '',
      availableWorkDays: [],
      availableWorkHours: '',
      timeZone: '',
      hourlyWage: '',
      salary: '',
      projectDescription: '',
      sampleProjectLink: '',
      relavantCertificates: '',
      isWorkRemotely: '',
      descProfessionalGoal: '',
      totalExperience: '',
      linkedInURL: '',
      personalURL: '',
      mobileNum: '',
      howLongWorkingRemotely: '',
      otherLanguages: [],
      refferedBy: '',
      gender: '',
      race: '',
      veteranStatus: '',
      dob: '',
      desireIndustryType: '',
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increaseProgress = this.increaseProgress.bind(this);
    this.decreaseProgress = this.decreaseProgress.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.addToList = this.addToList.bind(this);
    this.submitAnswers = this.submitAnswers.bind(this);
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then(() => {
          this.setState({
            redirectToReferrer: true,
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

  handleChange(e) {
    // e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { console.log(this.state); });
  }

  submitAnswers(e) {
    e.preventDefault();
    const answers = this.state;

    const myCauses = [answers.cause1, answers.cause2, answers.cause3];

    const data = {
      eligibleToWorkInUS: answers.eligibleToWorkInUS,
      causesLikeToWorkOn: myCauses,
      typeOfWork: answers.jobType,
      availableJoiningDate: answers.soonestJoinDate,
      fluentInEnglish: answers.fluentInEnglish,
      highestEducationLevel: answers.highestEducationLevel,
      jobChangeReason: answers.jobChangeReason,
      availableWorkDays: answers.availableWorkDays,
      availableWorkHours: answers.availableWorkHours,
      timeZone: answers.timeZone,
      hourlyWage: answers.hourlyWage,
      salary: answers.salary,
      projectDescription: answers.projectDescription,
      sampleProjectLink: answers.sampleProjectLink,
      relavantCertificates: answers.relavantCertificates,
      isWorkRemotely: answers.isWorkRemotely,
      descProfessionalGoals: answers.descProfessionalGoals,
      totalExperience: answers.totalExperience,
      desireLocation: answers.location,
      desireKeySkills: answers.keySkills,
      linkedInURL: answers.linkedInURL,
      personalURL: answers.personalURL,
      mobileNum: answers.mobileNum,
      howLongWorkingRemotely: answers.howLongWorkingRemotely,
      otherLanguages: answers.otherLanguages,
      refferedBy: answers.refferedBy,
      gender: answers.gender,
      descProfessionalGoal: answers.descProfessionalGoal,
      race: answers.race,
      veteranStatus: answers.veteranStatus,
      dob: answers.dob,
      desireIndustryType: answers.desireIndustryType,
    };

    // console.log(myAnswers);

    axios({
      url: `${backend}/api/user/updateUserProfile`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('session'),
      },
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addToList(e) {
    // e.preventDefault();

    let arrayToJoin = this.state[e.target.name];

    if (!arrayToJoin.includes(e.target.value)) {
      arrayToJoin = arrayToJoin.concat(e.target.value);

      this.setState({
        [e.target.name]: arrayToJoin,
      }, () => {
        console.log(this.state);
      });
    }
  }

  isChecked(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  increaseProgress() {
    this.setState({
      progress: this.state.progress + 1,
    });
  }

  decreaseProgress() {
    this.setState({
      progress: this.state.progress - 1,
    });
  }

  setProgress(e) {
    this.setState({
      progress: e.target.value,
    });
  }

  render() {
    const answered = this.state;

    return (
    <div>
      <Navigation2 />

      <div className="QnA">


        <h3>Complete your profile.</h3>
        <p>
          Answer a few more questions about your skills and interests
          so we can better match you to your perfect job.
        </p>


        <form>
          <QnABreadcrumb
            progress={this.state.progress}
            setProgress={this.setProgress}
          />

          <Switch>
            <Route path="/QnA/1" render={(props) => {
              return (
                <Page1 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  addToList={this.addToList}
                  causes={causes}
                />
              );
            }}/>
            <Route path="/QnA/2" render={(props) => {
              return (
                <Page2 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  addToList={this.addToList}
                  typingWork={this.state.typingWork}
                  salaries={salaries}
                  degrees={degrees}
                  timeZones={timeZones}
                />
              );
            }} />
            <Route path="/QnA/3" render={(props) => {
              return (
                <Page3 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  />
              );
            }} />
            <Route path="/QnA/4" render={(props) => {
              return (
                <Page4 {...props}
                  answered={answered}
                  keySkills={keySkills}
                  myKeySkills={this.state.keySkills}
                  addToList={this.addToList}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  // submitAnswers={this.submitAnswers}
                />
              );
            }} />

            <Route path="/QnA/5" render={(props) => {
              return (
                <Page5 {...props}
                  answered={answered}
                  keySkills={keySkills}
                  myKeySkills={this.state.keySkills}
                  addToList={this.addToList}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  submitAnswers={this.submitAnswers}
                />
              );
            }} />
          </Switch>
        </form>
      </div>
    </div>
    );
  }
}

export default QnA;