import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
// import EMatchRating from '#parts/EMatchRating.jsx';
import MatchWindow from './MatchWindow.jsx';
import HireSelect from './HireSelect.jsx';
import TitleAndDivider from '#parts/TitleAndDivider.jsx';
import IconAndTitle from '#parts/IconAndTitle.jsx';
import SuitcaseIcon from '#assets/icons/pngs/flaticon/profile-card-icons/suitcase.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
import LocationIcon from '#assets/icons/pngs/flaticon/profile-card-icons/location.png';

import JobMasterTools from '#auth/JobMasterTools.jsx';

const backend = process.env.BASE_URL;

class JobViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactionId: '',
      privilegeStatus: false,
    };

    this.deleteJob = this.deleteJob.bind(this);
  }

  componentDidMount() {
    axios({
      url: `${backend}/api/employers/getSingleEmployer`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log('am I special?', response.data.specialPrivilege);

        this.setState({
          privilegeStatus: response.data.specialPrivilege,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios({
      url: `${backend}/api/employers/matchesCandidateByEachJob/${this.props.location.state.job._id}`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        // const keySkills = JSON.parse(this.props.location.state.job.keySkills, Array) || [];

        if (response.data) {
          this.setState({
            matches: response.data,
            job: {
              ...this.props.location.state.job,
              // keySkills,
            },
            transactionId: this.props.location.state.job.transactionDetails.transactionIdForAddJob.transactionId,
          });
        }
      });
  }

  deleteJob(e) {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this job req?')) {
      console.log('shucks howdy');

      axios({
        url: `${backend}/api/jobs/delete/${this.props.location.state.job._id}`,
        method: 'POST',
        headers: {
          token: localStorage.getItem('e-session'),
        },
      })
        .then((response) => {
          console.log(response);

          window.location = '/dashboard';
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    const { job } = this.props.location.state;
    const { matches } = this.state;
    const { firstPaymentStatus } = job;
    const { hiringPaymentStatus } = job;
    const { transactionId } = this.state;
    const { privilegeStatus } = this.state;
    const expireDate = new Date(job.expireDate);

    console.log('viewing state', this.state);

    return (
      <div className="job-viewer">
        <ENav/>

        {
          privilegeStatus
            ? <JobMasterTools jobId={job._id} privilegeStatus={privilegeStatus}/>
            : ''
        }

        <form>

          <div className="title-and-edit">
            <div className="title-cluster">
              <div className="logo-box">
                <img src={job.companyLogoPath ? job.companyLogoPath : ''}/>
              </div>

              <div className="title-and-company">
                <h3>{job.title}</h3>
                <h4>{job.companyName}</h4>

                {
                  job.companyWebsiteUrl
                    ? <h4>Company Website: <a href={`http://${job.companyWebsiteUrl}`}>{job.companyWebsiteUrl}</a></h4>

                    : <p></p>
                }
              </div>
            </div>

              {
                transactionId
                  ? <p className="small-paragraph">{transactionId ? `Transaction ID:${transactionId}` : ''}</p>
                  : <div></div>
              }
          </div>

          <br/>
          <br/>

          {
            privilegeStatus
              ? <MatchWindow firstPaymentStatus={true} matches={matches} job={job}/>
              : <MatchWindow firstPaymentStatus={firstPaymentStatus} matches={matches} job={job}/>
          }

          <p className="small-paragraph">{firstPaymentStatus ? `Matches expire on: ${expireDate.toDateString()}` : ''}</p>

          <br/>
          <br/>
          {
            privilegeStatus
              ? ''
              : <HireSelect
                  firstPaymentStatus={firstPaymentStatus}
                  secondPaymentStatus={hiringPaymentStatus}
                  jobType={job.jobType}
                  jobId={job._id}
                />
          }

          <br/>
          <TitleAndDivider title="Our Mission"/>
          {/* <p>Our Mission:</p> */}
          <br/>

          <p className="small-paragraph">{job.aboutUs || ''}</p>
          <br />

          <div className="job-headline">

            <div className="job-headline-column">
              <IconAndTitle title="Job" icon={SuitcaseIcon}/>
              <li>{job.jobType}</li>
              <li>{job.availability}</li>
              <li>
                {
                  job.jobType === 'Part Time' ? `$${job.hourlyWage} / Hour` : `$${job.salary} / Year`
                }
              </li>
            </div>

            <div className="job-headline-column">
             <IconAndTitle title="Cause" icon={RibbonIcon}/>
              <li>{job.cause}</li>
            </div>

            <div className="job-headline-column">
             <IconAndTitle title="Location" icon={LocationIcon}/>
              <li>{job.location}</li>
              <li>Time Zone: GMT ({job.timeZone})</li>
            </div>

          </div>

          <TitleAndDivider title="Description"/>
          {/* <p>Description:</p> */}
          <br/>
          <p className="small-paragraph">{job.jobDetails}</p>

          <br/>
          <br/>

          {
            job.jobDescriptionPath
              ? <div>

              <p>Download Job Description: </p>
              <a className="small-link" href={`${job.jobDescriptionPath}`}>Link</a>
              <br/>
              <br/>
            </div>

              : <p></p>
          }

        <TitleAndDivider title="Skills required for this job"/>
        {/* <p>Skills required for this job:</p> */}
          <br/>
          <div className="select-list">
            <div className="item-list">
              {
                job.keySkills.map((skill, i) => {
                  return (
                    <button
                      key={i}
                      disabled
                      className="list-item"
                    >
                      {skill}
                    </button>
                  );
                })
              }
            </div>
          </div>

          <br/>
          <br/>

          {
            firstPaymentStatus ? ''
              : <div className="job-tools">
            <div>
              <Link
                to={{
                  pathname: '/gig-select-2',
                  state: { job, edit: true },
                }}
                ><button className="small-button button-1">
                  Edit
                  </button>
              </Link>

              <button className="small-button button-2"
                onClick={this.deleteJob}
              >Delete</button>
            </div>
          </div>
          }

        </form>
      </div>
    );
  }
}

export default JobViewer;