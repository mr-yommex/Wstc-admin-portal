import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Tables

import CompleteReport from "./DataTables/Examples/CompleteReport";
import FailedLogin from "./DataTables/Examples/FailedLogin";
import FailedSignUp from "./DataTables/Examples/FailedSignUp";
import Registered from "./DataTables/Examples/Registered";
import LoggedIn from "./DataTables/Examples/LoggedIn";
import CardRequests from "./DataTables/Examples/CardRequests";



const Tables = ({ match }) => (
  <Fragment>
    <div className="app-main1">
      <div className="app-main__outer">
        <div className="app-main__inner">

          <Route path={`${match.url}/datatables-complete-report`} component={CompleteReport}/>
          <Route path={`${match.url}/datatables-failed-login`} component={FailedLogin}/>
          <Route path={`${match.url}/datatables-failed-signup`} component={FailedSignUp}/>
          <Route path={`${match.url}/datatables-registered-users`} component={Registered}/>
          <Route path={`${match.url}/datatables-loggedin-users`} component={LoggedIn}/>
          <Route path={`${match.url}/datatables-card-requests`} component={CardRequests}/>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Tables;
