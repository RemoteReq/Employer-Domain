import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';
import Radio from '#parts/Radio.jsx';

class GigSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availability: '',
      jobType: '',
      edit: false,
    };

    this.handlePriceOption = this.handlePriceOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state) {
      console.log(this.props.location.state);

      const { job, edit } = this.props.location.state || '';

      this.setState({
        ...job,
        edit,
      }, () => { console.log(this.state); });
    }
  }

  handleRadio(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { jobType } = this.state;

      console.log(this.state);

      this.handlePriceOption(jobType);
    });
  }

  handlePriceOption(jobType) {
    if (jobType === 'Full Time') {
      this.setState({
        price: 100.00,
        afterHirePrice: 2500.00,
      }, () => { console.log(this.state); });
    }

    if (jobType === 'Part Time') {
      this.setState({
        price: 100.00,
        afterHirePrice: 1000.00,
      }, () => { console.log(this.state); });
    }
  }

  render() {
    const {
      jobType, availability, price, afterHirePrice, keySkills,
    } = this.state;

    return (
      <div className="gig-select-page">
        <ENav/>

        <div className="gig-select-2">

          <p className="small-paragraph">Is this job Remote, Flexible (Can be both Remote or On-site), or On-site?</p>

          <div
            className="availability-radios"
            onChange={(e) => { this.handleChange(e); }}
          >
            <Radio
              value="Remote"
              label="Remote"
              name="availability"
              checked={availability === 'Remote'}
              onChange={this.handleRadio}
            />
            <Radio
              value="Flexible"
              label="Flexible"
              name="availability"
              checked={availability === 'Flexible'}
              onChange={this.handleRadio}
            />
            <Radio
              value="On-site"
              label="On-site"
              name="availability"
              checked={availability === 'On-site'}
              onChange={this.handleRadio}
            />
          </div>

          <p className="small-paragraph">Is this job a Full Time or a Part Time job?</p>


          <div
            className="availability-radios"
            onChange={(e) => { this.handleChange(e); }}
          >
            <Radio
              value="Full Time"
              label="Full Time"
              name="jobType"
              checked={jobType === 'Full Time'}
              onChange={this.handleRadio}
            />
            <Radio
              value="Part Time"
              label="Part Time"
              name="jobType"
              checked={jobType === 'Part Time'}
              onChange={this.handleRadio}
            />
          </div>

          <div className="job-form-nav-buttons">
            <div></div>

            <Link
              to={{
                pathname: '/job-form-2',
                state: {
                  // edit,
                  availability,
                  jobType,
                  price,
                  afterHirePrice,
                  keySkills,
                  ...this.state,
                },
              }}
            >
              <button className="button-next">Next &raquo;</button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default GigSelect;