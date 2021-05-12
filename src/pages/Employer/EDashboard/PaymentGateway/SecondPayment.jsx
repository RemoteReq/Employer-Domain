// My guess is that it would look similar to the First Payment Gateways except with a different price
// To check out with based on the job type.

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import Eauth from '../../EAuth/EAuth.jsx';
import ENav from '../../ENav/ENav.jsx';
import Preloader from '#components/svgs/Preloader.jsx';
import Prices from '#assets/inputs/prices.js';

const backend = process.env.BASE_URL;

class SecondPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // jobReqPurchased: false,
      requestInProgress: false,
    };

    this.purchase = this.purchase.bind(this);
    this.enablePreloader = this.enablePreloader.bind(this);
  }

  componentDidMount() {
    const { jobId } = this.props.location.state;

    Eauth.generateClientToken(() => {
      const newToken = localStorage.getItem('clientToken');

      this.setState({
        clientToken: newToken,
        ...this.props.location.state,
      });
    });

    axios({
      url: `${backend}/api/jobs/getJobById/${jobId}`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log('single job by id:', response);

        return response;
      })
      .then((response) => {
        const { jobType, availability } = response.data;
        const { hireFee } = Prices[jobType][availability];

        console.log(hireFee);

        this.setState({
          jobType,
          availability,
          hireFee,
        });

        // if (response.jobType === 'Part Time') {
        //   this.setState({
        //     jobType: response.jobType,
        //     reqCost: 900,
        //   });
        // } else if (response.jobType === 'Full Time') {
        //   this.setState({
        //     jobType: response.jobType,
        //     reqCost: 2400,
        //   });
        // } else {
        //   console.log('error setting job type');
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  enablePreloader() {
    this.setState({
      requestInProgress: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          requestInProgress: false,
        });
      }, 2000);
    });
  }

  purchase(e) {
    e.preventDefault();

    this.instance.requestPaymentMethod()
      .then((response) => {
        console.log('first response in purchase', response);

        axios({
          url: `${backend}/api/jobs/checkoutAfterHired`,
          method: 'POST',
          headers: {
            token: localStorage.getItem('e-session'),
          },
          data: {
            amount: 900,
            paymentMethodNonce: response.nonce,
            jobId: this.props.location.state.jobId,
          },
        })
          .then((result) => {
            console.log('after purchase', result);
            if (result.status) {
              this.props.history.push('/dashboard');
            }
          })
          .catch((error) => {
            console.log(error);
          // catch; error status message
          });
      });
  }

  render() {
    console.log(
      this.props.location.state,
      this.state,
    );

    const { jobType, availability, hireFee } = this.state;
    const { clientToken } = this.state;
    const { requestInProgress } = this.state;

    // Drop In
    return (
      <div className="first-payment">
        <ENav />

        {
          clientToken
            ? <form>
          <div className={`form-preloader ${requestInProgress ? 'show' : 'hide'}`}>
            <Preloader color="blue"/>

            <p>Processing payment</p>
          </div>
          <h3>Congratulations on your new hire!</h3>
          <p className="small-paragraph">
            The placement fee for your new {jobType} {availability} hire will be ${hireFee}
          </p>
          {
            this.state.clientToken
              ? <div>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      vaultManager: true,
                      paypal: {
                        flow: 'vault',
                        amount: hireFee,
                        currency: 'USD',
                      },
                    }}
                    onInstance={(instance) => { this.instance = instance; } }
                    />

                  <div className="form-handler">
                    <button
                      className="button-1"
                      onClick={(e) => { return this.purchase(e); }}
                      >Submit Job Req Completion
                    </button>
                  </div>
                </div>
              : <div>Loading Drop In ...</div>
          }
        </form>
            : <div>Loading . . .</div>
        }
      </div>
    );
  }
}

export default SecondPayment;