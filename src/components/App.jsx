import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';

// Navs
import ScrollToTop from './parts/ScrollToTop.jsx';
import Navigation from './parts/Navigation1.jsx';
import Footer from './parts/Footer.jsx';

// Employer Pages
import ESignIn from '../pages/Employer/ESignIn/ESignIn.jsx';
import ESignUp from '../pages/Employer/ESignUp/ESignUp.jsx';
import EVerify from '../pages/Employer/EVerify/EVerify.jsx';
import EDashboard from '../pages/Employer/EDashboard/EDashboard.jsx';
import ESettings from '../pages/Employer/ESettings/ESettings.jsx';
import JobForm from '../pages/Employer/EDashboard/JobForm/JobForm.jsx';
import FirstPayment from '../pages/Employer/EDashboard/PaymentGateway/FirstPayment.jsx';
import SecondPayment from '../pages/Employer/EDashboard/PaymentGateway/SecondPayment.jsx';
import GigSelect from '../pages/Employer/EDashboard/PaymentGateway/GigSelect.jsx';
import JobViewer from '../pages/Employer/EDashboard/JobViewer/JobViewer.jsx';
import MatchViewer from '../pages/Employer/EDashboard/MatchViewer/MatchViewer.jsx';
import EForgotPassword from '../pages/Employer/EForgotPassword/EForgotPassword.jsx';
import ResetPassword from '../pages/Employer/EResetPassword/EResetPassword.jsx';
import JobForm2 from '../pages/Employer/EDashboard/JobForm/JobForm2.jsx';
import GigSelect2 from '../pages/Employer/EDashboard/JobForm/GigSelect2.jsx';

// Pages
// import Settings from '../pages/Settings/Settings.jsx';
// import Page404 from '../pages/Page404.jsx';
// import ForgotPassword from '../pages/ForgotPassword/ForgotPassord.jsx';
// import ResetPassword from '../pages/ResetPassword/ResetPassword.jsx';
// import Employer from '../pages/Employer/Employer.jsx';
// import Verify from '../pages/Verify/Verify.jsx';
// import EVerify from '../pages/Employer/EVerify/EVerify.jsx';
// import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
// import TermsOfUse from '../pages/TermsOfUse.jsx';
import DevBanner from './parts/DevBanner.jsx';
import IsHired from '../pages/Employer/IsHired/IsHired.jsx';
import ThankYou from '../pages/ThankYou/ThankYou.jsx';
// import RequestADemo from '../pages/RequestADemo.jsx';
// import FAQ from '../pages/FAQ.jsx';

const IN_DEV_MODE = process.env.NODE_ENV;

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <DevBanner env={IN_DEV_MODE}/>
          <div className={`${IN_DEV_MODE === 'development' ? 'dev-mode' : ''}`}>
            <Navigation/>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/sign-in" />
                </Route>
                <Route path="/sign-in" component={ESignIn}/>
                <Route path="/sign-up" component={ESignUp} />
                <Route path="/employerEmailVerify" component={EVerify} />
                <Route path="/settings" component={ESettings}/>
                <Route path="/dashboard" component={EDashboard} />
                <Route path="/addJob" component={JobForm} />
                <Route path="/job-form-2" component={JobForm2}/>
                <Route path="/gigSelect" component={GigSelect} />
                <Route path="/gig-select-2" component={GigSelect2}/>
                <Route path="/firstPayment" component={FirstPayment} />
                <Route path="/secondPayment" component={SecondPayment} />
                <Route path="/jobs/" component={JobViewer}/>
                <Route path="/isHired" component={IsHired} />
                <Route path="/match/" component={MatchViewer} />
                <Route path="/employerResetPassword" component={ResetPassword} />
                <Route path="/forgot-password" component={EForgotPassword} />
                <Route path="/afterSignUp" component={ThankYou} />
              </Switch>
            <Footer/>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;


/* <Route path="/employer" component={Employer} />
<Route path="/request-a-demo" component={RequestADemo} />
<Route path="/forgot-password" component={ForgotPassword} />
<Route path="/resetPassword" component={ResetPassword} />
<Route path="/userEmailVerify" component={Verify} />
<Route path="/employerEmailVerify" component={EVerify} />
<Route path="/privacy-policy" component={PrivacyPolicy} />
<Route path="/terms-of-Use" component={TermsOfUse} />
<Route path="/isHired" component={IsHired} />
<Route path="/employerResetPassword" component={EResetPassword} />
<Route path="/faq" component={FAQ} />
<ProtectedRoute path="/settings" component={Settings} />
<Route component={Page404} /> */