import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS


import AdminPortal from "./AdminPortal/";

// Layout

// import AppHeader from "../../Layout/AppHeader/";
// import AppSidebar from "../../Layout/AppSidebar/";
// import AppFooter from "../../Layout/AppFooter/";


// Theme Options
// import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    {/* <ThemeOptions /> */}
    {/* <AppHeader /> */}
    <div className="app-main1">
      {/* <AppSidebar /> */}
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/adminportal`} component={AdminPortal} />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
