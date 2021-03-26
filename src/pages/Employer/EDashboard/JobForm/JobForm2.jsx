import React, { Component } from 'react';
import Axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
import EAuth from '../../EAuth/EAuth.jsx';
import Basics from './Questions/Basics.jsx';
import Availability from './Questions/Availability.jsx';
import Experience from './Questions/Experience.jsx';
import Location from './Questions/Location.jsx';

const backend = process.env.BASE_URL;

const CompanyWindow = ({ job }) => {
  return (
    <div className="company-window">
      <div className="image-box">
        <img src={job.companyLogo || ''}/>
      </div>

      <div>
        <h4>{job.companyName}</h4>
        <label>Company Website: </label>
        <a href={job.companyWebsite}>{job.companyWebsite}</a>
        <p className="small-paragraph">{job.availability}</p>
        <p className="small-paragraph">{job.jobType}</p>
      </div>
    </div>
  );
};

const JobForm2BreadCrumbs = ({ setPage, progress }) => {
  return (
    <div className="breadcrumbs">

      <button
        className={`small-button ${progress > 0 ? 'complete' : 'incomplete'}`}
        onClick={(e) => { return setPage(e); }}
        value={1}
      >
        Basics
      </button>

      <div className={`breadcrumb-bar ${progress > 1 ? 'complete' : 'incomplete'}`}></div>

      <button
        className={`small-button ${progress > 1 ? 'complete' : 'incomplete'}`}
        onClick={(e) => { return setPage(e); }}
        value={2}
      >
        Availability
      </button>

      <div className={`breadcrumb-bar ${progress > 2 ? 'complete' : 'incomplete'}`}></div>

      <button
        className={`small-button ${progress > 2 ? 'complete' : 'incomplete'}`}
        onClick={(e) => { return setPage(e); }}
        value={3}
      >
        Experience
      </button>

      <div className={`breadcrumb-bar ${progress > 3 ? 'complete' : 'incomplete'}`}></div>

      <button
        className={`small-button ${progress > 3 ? 'complete' : 'incomplete'}`}
        onClick={(e) => { return setPage(e); }}
        value={4}
      >
        Location
      </button>

    </div>
  );
};

const QSwitch = ({
  pageNumber, goNext, goPrev, handleChange, job, addToList, handleSelect, addJob, removeFromList, edit,
}) => {
  switch (pageNumber) {
    case 1:
      return (
        <Basics
          job={job}
          handleChange={handleChange}
          handleSelect={handleSelect}
          goNext={goNext}
        />
      );

    case 2:
      return (
        <Availability
          job={job}
          handleChange={handleChange}
          goNext={goNext}
          goPrev={goPrev}
        />
      );

    case 3:
      return (
        <Experience
          job={job}
          handleChange={handleChange}
          addToList={addToList}
          removeFromList={removeFromList}
          goNext={goNext}
          goPrev={goPrev}
        />
      );
    case 4:
      return (
        <Location
          job={job}
          handleChange={handleChange}
          handleSelect={handleSelect}
          goPrev={goPrev}
          edit={edit}
          addJob={addJob}
        />
      );
    default:
      return (
        <div></div>
      );
  }
};

class JobForm2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        keySkills: [],
      },
      currentPage: 1,
      progress: 1,
      edit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.addJob = this.addJob.bind(this);
    this.setPage = this.setPage.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
  }

  componentDidMount() {
    const {
      jobType, availability, edit, ...rest
    } = this.props.location.state;

    Axios({
      url: `${backend}/api/employers/getSingleEmployer`,
      method: 'post',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          job: {
            ...this.state.job,
            ...rest,
            jobType,
            availability,
            companyName: response.data.companyName,
            companyLogo: response.data.companyLogo,
            companyWebsite: response.data.companyWebsite || '',
            aboutUs: response.data.location,
          },
          edit,
        }, () => { console.log(this.state); });
      });
  }

  handleChange(e) {
    e.preventDefault();
    console.log('hit');

    this.setState({
      job: {
        ...this.state.job,
        [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      },
    }, () => { console.log(this.state); });
  }

  handleSelect(option, e) {
    this.setState({
      job: {
        ...this.state.job,
        [e.name]: option.value,
      },
    }, () => { return console.log(this.state); });
  }

  addToList(option, e) {
    console.log(option, e);

    let arrayToJoin = this.state.job[e.name];

    if (!arrayToJoin.includes(option.value)) {
      arrayToJoin = arrayToJoin.concat(option.value);

      this.setState({
        job: {
          ...this.state.job,
          [e.name]: arrayToJoin,
        },
      }, () => {
        console.log(this.state);
      });
    }
  }

  removeFromList(e) {
    const arrayToSplice = this.state.job.keySkills;
    const index = arrayToSplice.indexOf(e.target.value);

    arrayToSplice.splice(index, 1);

    console.log(e.target.value, 'at index: ', index);

    this.setState({
      job: {
        ...this.state.job,
        [e.target.name]: arrayToSplice,
      },
    }, () => {
      console.log(this.state);
    });
  }

  addJob(e) {
    e.preventDefault();

    const addJobForm = new FormData();

    const { job, edit } = this.state;
    // const workHours = `${job.availableHoursFrom}-${job.availableHoursTo}`;

    // addJobForm.append('transactionIdForAddJob', 'sample job for testing');
    addJobForm.append('transactionIdForAddJob', this.props.location.state.transactionId || '');

    // Header
    addJobForm.append('companyLogoPath', job.companyLogo);
    addJobForm.append('companyName', job.companyName);
    addJobForm.append('companyWebsiteUrl', job.companyWebsite);
    addJobForm.append('jobDescription', job.jobDescription);
    // jobType is in FT/PT conditional
    addJobForm.append('availability', job.availability);
    // aboutUs
    addJobForm.append('aboutUs', job.aboutUs);

    // Comment and uncomment for testing
    // addJobForm.append('companyLogoPath', 'test.jpg');
    // addJobForm.append('jobDescription', 'pdf.pdf');
    // addJobForm.append('companyWebsiteUrl', 'http://www.websiteURL.com');


    // basics
    addJobForm.append('title', job.title);
    addJobForm.append('cause', job.cause);
    addJobForm.append('jobDetails', job.jobDetails);

    // availability
    addJobForm.append('soonestJoinDate', job.soonestJoinDate);
    // wage & salary are in FT/PT conditional

    // experience
    addJobForm.append('minExperience', job.minExperience);
    addJobForm.append('requiredEducationLevel', job.requiredEducationLevel);

    addJobForm.append('keySkills', JSON.stringify(job.keySkills));
    // OR
    // iterate over keyskills, appending them to the field
    // for (let i = 0; i < job.keySkills.length; i++) {
    //   addJobForm.append('keySkills', job.keySkills[i]);
    // }

    // location
    addJobForm.append('timeZone', job.timeZone);
    addJobForm.append('location', job.location);
    addJobForm.append('zipcode', job.zipcode);

    // These fields need to be removed
    addJobForm.append('otherLanguages', ['language1', 'language2']);
    addJobForm.append('workDays', '');
    addJobForm.append('workHours', '');
    addJobForm.append('requireCertification', '');
    addJobForm.append('maxExperience', '');

    // notification settings
    addJobForm.append('numberOfCandidate', 5);
    addJobForm.append('percentageMatch', 50);
    addJobForm.append('eligibleToWorkInUS', true);
    addJobForm.append('fluentInEnglish', true);

    if (job.jobType === 'Part Time') {
      addJobForm.append('jobType', job.jobType);
      addJobForm.append('salary', 0);
      addJobForm.append('hourlyWage', job.hourlyWage);
    }

    if (job.jobType === 'Full Time') {
      addJobForm.append('jobType', job.jobType);
      addJobForm.append('salary', job.salary);
      addJobForm.append('hourlyWage', 0);
    }

    // View values before sending
    for (const pair of addJobForm.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    // this.enablePreloader();

    const destinatation = edit ? `${EAuth.backend}/api/jobs/editJob/${job._id}` : `${EAuth.backend}/api/jobs/add`;

    if (edit === false) {
      Axios({
        url: destinatation,
        method: 'POST',
        headers: {
          token: localStorage.getItem('e-session'),
        },
        data: addJobForm,
      })
        .then((response) => {
          console.log(response);

          window.location = '/employer/dashboard';

          return response.status;
        })
        .then(() => {
          console.log('taking you to dashboard');

          window.location = '/employer/dashboard';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  setPage(e) {
    e.preventDefault();

    this.setState({
      currentPage: parseInt(e.target.value, 10),
      progress: parseInt(e.target.value, 10),
    }, () => { console.log(this.state); });
  }

  goNext(e) {
    e.preventDefault();

    const { currentPage } = this.state;
    const { progress } = this.state;

    this.setState({
      currentPage: currentPage + 1,
      progress: progress + 1,
    });
  }

  goPrev(e) {
    e.preventDefault();

    const { currentPage } = this.state;
    const { progress } = this.state;

    this.setState({
      currentPage: currentPage - 1,
      progress: progress - 1,
    });
  }

  render() {
    const {
      currentPage, progress,
      job,
      edit,
      // companyWebsite, companyLogo, companyName, jobType, availability,
    } = this.state;

    return (
      <div className="job-form-2-page">
        <ENav/>

        <div className="container">
          <CompanyWindow
            job={job}
          />

          <div className="job-form-2">

            <JobForm2BreadCrumbs
              setPage={this.setPage}
              progress={progress}
              />

            <QSwitch
              job={job}
              edit={edit}
              pageNumber={currentPage}
              progress={progress}
              handleChange={this.handleChange}
              handleSelect={this.handleSelect}
              addToList={this.addToList}
              removeFromList={this.removeFromList}
              goNext={this.goNext}
              goPrev={this.goPrev}
              addJob={this.addJob}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default JobForm2;