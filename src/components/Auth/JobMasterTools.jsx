import React, { Component } from 'react';
import axios from 'axios';

const backend = process.env.BASE_URL;
// const backend = 'http://localhost:3030';

const AssignForm = ({
  jobId, handleChange, assignJob, assignmentSuccess, assignmentFail,
}) => {
  return (
    <div>
      <h4>Assign Tool</h4>

      <label>Job ID:</label>
      <input
        name="jobId"
        readOnly
        defaultValue={jobId}
      />

      <label>Employer Email: </label>
      <input
        name="targetEmployerEmail"
        onChange={(e) => { return handleChange(e); }}
      />

      <div className="button-group">
        <button
          className="small-button button-1"
          onClick={(e) => { return assignJob(e); }}
        >Assign</button>
      </div>

        {
          assignmentSuccess
            ? <p className="small-paragraph" style={{ color: 'Green', textAlign: 'center' }}>
            Job assignment successful
          </p>
            : ''
        }

        {
          assignmentFail
            ? <p className="small-paragraph" style={{ color: 'Red', textAlign: 'center' }}>
            No such email
          </p>
            : ''
        }
    </div>
  );
};

class JobMasterTools extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.assignJob = this.assignJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      jobId: this.props.jobId,
      privilegeStatus: this.props.privilegeStatus,
    }, () => { console.log(this.state); });
  }

  assignJob(e) {
    e.preventDefault();

    const { targetEmployerEmail } = this.state;

    const data = {
      jobId: this.state.jobId,
      email: targetEmployerEmail.toLowerCase(),
    };

    axios({
      url: `${backend}/api/jobs/jobAssignToAnotherEmployer`,
      data,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          this.setState({
            assignmentSuccess: true,
            assignmentFail: false,
          }, () => {
            window.location = '/dashboard';
          });
        }
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          assignmentSuccess: false,
          assignmentFail: true,
        });
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
      assignmentSuccess: false,
      assignmentFail: false,
    }, () => { console.log(this.state); });
  }

  render() {
    const { assignmentSuccess, assignmentFail } = this.state;

    return (
      <div className="Job-Master-Tools">

        <AssignForm
          jobId={this.props.jobId}
          assignJob={this.assignJob}
          handleChange={this.handleChange}
          assignmentSuccess={assignmentSuccess}
          assignmentFail={assignmentFail}
        />
      </div>
    );
  }
}

export default JobMasterTools;