import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";
import {
  Container,
} from "reactstrap";

import AssignRole from "./AssignRole";
import CreateUser from "./CreateUser";


const tabsContent = [
    {
      title: "Assign a Role",
      content: <AssignRole />,
      key: 1,
    },

    {
        title: "Create New User",
        content: <CreateUser />,
        key: 2,
      },
  
  ];

  function getTabs() {
    return tabsContent.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.content,
      key: tab.key,
    }));
  }

export default class AnalyticsDashboard1 extends Component {

  render() {

    return (
      <Fragment>
        <Container fluid>
        <Tabs tabsWrapperClass="body-tabs body-tabs-layout body-tabs-big" transform={false}
            showInkBar={true} items={getTabs()}/>

        </Container>
      </Fragment>
    );
  }
}
