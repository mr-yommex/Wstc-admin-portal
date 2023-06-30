import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import AccountManagement from "./Examples/AccountManagement";
// import CardManagement from "./Examples/CardManagement";
import UsersAndRoles from "./Examples/UsersAndRoles";
import ComingSoon from "./Examples/ComingSoon";
import General from "./Examples/General";
import AppLogo from "../../../Layout/AppLogo";

const tabsContent = [
  {
    title: "Customer",
    content: <AccountManagement />,
    key: 1,
  },
  {
    title: "Cards Management",
    content: <ComingSoon />,
    key: 2,
  },
  {
    title: "Users and Roles",
    content: <UsersAndRoles />,
    key: 3,
  },
  {
    title: "General",
    content: <General />,
    key: 4,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: tab.key,
  }));
}

export default class SalesDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-inner-layout">
          <div className="app-inner-layout__header-boxed p-0">
            <div className="app-inner-layout__header page-title-icon-rounded text-white bg-primary mb-4">
              <a href="#/dashboards/adminportal"><AppLogo /></a>
              <PageTitle heading="Admin Portal"
                subheading="Welcome, CURRENT_ADMIN!"
                icon="pe-7s-user icon-gradient bg-sunny-morning"
                />
            </div>
          </div>
          <Tabs tabsWrapperClass="body-tabs body-tabs-layout body-tabs-big" transform={false}
            showInkBar={true} items={getTabs()}/>
        </div>
      </Fragment>
    );
  }
}
