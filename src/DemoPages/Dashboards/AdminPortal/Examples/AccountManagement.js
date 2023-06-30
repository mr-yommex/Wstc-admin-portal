import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Container,
  Card,
  CardFooter,
} from "reactstrap";

import CountUp from "react-countup";




import { IoIosAnalytics } from "react-icons/io";

import { makeData } from "../../../Tables/DataTables/Examples/utils";



export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      data: makeData(),
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {

    return (
      <Fragment>
        <Container fluid>
          <Card className="mb-3">
            <CardHeader className="card-header-tab z-index-6">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                <i className="header-icon lnr-charts icon-gradient bg-happy-green"> {" "} </i>
                Customers Report
              </div>
            </CardHeader>
            <Row className="g-0">
              <Col sm="12" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-10 bg-primary" />
                    <i className="lnr-user text-white opacity-8" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Active Customers</div>
                    <a href="#/tables/datatables-active-accounts"><div className="widget-numbers text-dark">82,382</div></a>
                    {/* <div className="widget-description opacity-8 text-focus">
                      <div className="d-inline text-danger pe-1">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="ps-1">2.1%</span>
                      </div>
                      since last month
                    </div> */}
                  </div>
                </div>
                <div className="divider m-0 d-md-none d-sm-block" />
              </Col>
              
              <Col sm="12" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  {/* <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-10 bg-primary" />
                    <i className="lnr-user text-white opacity-8" />
                  </div> */}
                  <div className="widget-chart-content">
                    {/* <div className="widget-subheading">Active Customers</div>
                    <a href="#/tables/datatables-active-accounts"><div className="widget-numbers">82,382</div></a> */}
                    {/* <div className="widget-description opacity-8 text-focus">
                      <div className="d-inline text-danger pe-1">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="ps-1">2.1%</span>
                      </div>
                      since last month
                    </div> */}
                  </div>
                </div>
                {/* <div className="divider m-0 d-md-none d-sm-block" /> */}
              </Col>

              <Col sm="12" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-9 bg-danger" />
                    <i className="lnr-cross-circle text-white" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-">Non-active Customers</div>
                    <a href="#/tables/datatables-complete-report"><div className="widget-numbers text-dark">
                      <CountUp start={0} end={735} separator="" decimals={0} decimal="."
                        prefix="" useEasing={false} suffix="" duration="2" />
                    </div></a>
                    {/* <div className="widget-description text-focus">
                      Increased by
                      <span className="text-warning ps-1">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="ps-1">7.35% </span>
                      </span>
                      since last month
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
            <CardFooter className="text-center d-block p-3"><br /> <br /><br /> <br />
              <Row>
              <Col sm="12" md="4" lg="4">
              <a href="#/tables/datatables-active-accounts"><Button color="primary" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                <span className="me-2 opacity-7">
                  {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                  <IoIosAnalytics color="#ffffff" />
                </span>
                <span className="me-1">View Active Customers Report</span>
              </Button></a>
              </Col>

                <Col sm="12" md="4" lg="4">
              <a href="#/tables/datatables-complete-report"><Button color="primary" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                <span className="me-2 opacity-7">
                  {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                  <IoIosAnalytics color="#ffffff" />
                </span>
                <span className="me-1">View Non-active Customers Report</span>
              </Button></a>
              </Col>
              
              
                <Col sm="12" md="4" lg="4">
              <a href="#/pages/channel-manage"><Button color="primary" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                <span className="me-2 opacity-7">
                  {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                  <IoIosAnalytics color="#ffffff" />
                </span>
                <span className="me-1">Channel Management</span>
              </Button></a>
              </Col>
              </Row>
            </CardFooter>
          </Card>
          
          <Row>
            <Col md="6" lg="3" xl="3">
            <a href="#/tables/datatables-failed-login"><div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-dark border-dark">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            {/* <small className="opacity-5">$</small> */}
                            <CountUp start={0} end={74} separator="" decimals={0} decimal="" prefix="" duration="3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="widget-subheading mb-0 opacity-5">
                      failed login attempts this month
                    </h6>
                  </div>
                  {/* <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                    <Col md="9">
                      <Sparklines data={sampleData}>
                        <SparklinesCurve
                          style={{
                            strokeWidth: 3,
                            stroke: "#000000",
                            fill: "none",
                          }} />
                      </Sparklines>
                    </Col>
                  </Row> */}
                </div>
              </div></a>
            </Col>
            <Col md="6" lg="3" xl="3">
            <a href="#/tables/datatables-failed-signup"><div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-warning border-warning">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            {/* <small className="opacity-5">$</small> */}
                            <CountUp start={0} end={13} separator="" decimals={0} decimal="" prefix="" duration="3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="widget-subheading mb-0 opacity-5">
                      failed sign up attempts
                    </h6>
                  </div>
                  {/* <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                    <Col md="9">
                      <Sparklines data={sampleData2}>
                        <SparklinesCurve
                          style={{
                            strokeWidth: 3,
                            stroke: "#f7b924",
                            fill: "none",
                          }} />
                      </Sparklines>
                    </Col>
                  </Row> */}
                </div>
              </div></a>
            </Col>
            <Col md="6" lg="3" xl="3">
            <a href="#/tables/datatables-loggedin-users"><div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-primary border-primary">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            <small className="opacity-5"></small>
                            <CountUp start={0} end={128} separator="" decimals={0} decimal="" prefix="" duration="5" />
                          </div>
                        </div>
                      </div>
                    </div>
                     <h6 className="widget-subheading mb-0 opacity-5">
                      logged in customers
                    </h6>
                  </div>
                  {/* <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                    <Col md="9">
                      <Sparklines data={sampleData3}>
                        <SparklinesCurve
                          style={{
                            strokeWidth: 3,
                            stroke: "#545cd8",
                            fill: "none",
                          }} />
                      </Sparklines>
                    </Col>
                  </Row> */}
                </div>
              </div></a>
            </Col>
            <Col md="6" lg="3" xl="3">
            <a href="#/tables/datatables-registered-users"><div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-success border-success">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            <small className="opacity-5"></small>
                            <CountUp start={0} end={76128} separator="," decimals={0} decimal="" prefix="" duration="5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="widget-subheading mb-0 opacity-5">
                      registered customers
                    </h6>
                  </div>
                  {/* <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
                    <Col md="9">
                      <Sparklines data={sampleData3}>
                        <SparklinesCurve
                          style={{
                            strokeWidth: 3,
                            stroke: "#28a745",
                            fill: "none",
                          }} />
                      </Sparklines>
                    </Col>
                  </Row> */}
                </div>
              </div></a>
            </Col>
          </Row>
          


        </Container>
      </Fragment>
    );
  }
}
