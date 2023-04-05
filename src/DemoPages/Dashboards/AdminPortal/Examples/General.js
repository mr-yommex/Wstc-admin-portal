import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";
import {
  Container,
} from "reactstrap";

import AvailableStocks from "./AvailableStocks";
import AcceptableStocks from "./AcceptableStocks";
import EligibilityCriteria from "./EligibilityCriteria";


const tabsContent = [
    {
      title: "Available Stocks",
      content: <AvailableStocks />,
      key: 1,
    },

    {
        title: "Acceptable Stocks (Collateral)",
        content: <AcceptableStocks />,
        key: 2,
      },

      {
        title: "Eligibility Criteria",
        content: <EligibilityCriteria />,
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
