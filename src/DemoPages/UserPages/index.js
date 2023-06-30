import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// USER PAGES

import Login from "./Login/";


import ForgotPassword from "./ForgotPassword/";

import ChannelTest from "./ChannelTest/";
import ChannelManage from "./ChannelManage/";

const UserPages = ({ match }) => (
  <Fragment>
    <div className="app-container">
      {/* User Pages */}

      <Route path={`${match.url}/login`} component={Login} />
      <Route path={`${match.url}/channel-test`} component={ChannelTest} />
      <Route path={`${match.url}/channel-manage`} component={ChannelManage} />
      <Route path={`${match.url}/forgot-password`} component={ForgotPassword} />
    </div>
  </Fragment>
);

export default UserPages;
