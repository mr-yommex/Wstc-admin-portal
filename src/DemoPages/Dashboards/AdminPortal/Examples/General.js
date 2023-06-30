import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";
import {
  Container,
} from "reactstrap";

import LoanAdministration from "./LoanAdministration";
import CommercialPaper from "./CommercialPaper";
import ComingSoon from "./ComingSoon";


const tabsContent = [
    {
      title: "Loan Administration",
      content: <LoanAdministration />,
      key: 1,
    },

    {
        title: "Commercial Paper",
        content: <CommercialPaper />,
        key: 2,
      },

      {
        title: "Coming Soon",
        content: <ComingSoon />,
        key: 3,
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
