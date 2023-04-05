import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Container,
  Card,
  CardBody,
  CardFooter,
  Table,
  ButtonGroup,
  Input,
  InputGroup,
} from "reactstrap";

import CountUp from "react-countup";

import DataTable from 'react-data-table-component';


import { IoIosAnalytics } from "react-icons/io";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import {
  faAngleUp,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Select from "react-select";

const options = [
  { value: "1", label: "Today" },
  { value: "2", label: "Last Week" },
  { value: "3", label: "Last 30 Days" },
  { value: "4", label: "Last 3 Months" },
  { value: "5", label: "Last Year" },
];

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);

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
    const { selectedOption } = this.state;
    const { data } = this.state;
    const columns = [
      {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
      },
      {
        name: "Last Name",
        id: "lastName",
        selector: row => row.lastName,
        sortable: true,
      },

      {
        name: "Account Number",
        selector: row => row.acct,
        sortable: true,
      },

      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },

      {
        selector: row => row.suspend,
        sortable: true,
      },
      {
        selector: row => row.restrict,
        sortable: true,
      },
      {
        selector: row => row.block,
        sortable: true,
      },

    ];

    const settings = {
      className: "",
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
    };

    return (
      <Fragment>
        <Container fluid>
          <Card className="mb-3">
            <CardHeader className="card-header-tab z-index-6">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                <i className="header-icon lnr-charts icon-gradient bg-happy-green"> {" "} </i>
                Accounts Stats
              </div>
              <div className="btn-actions-pane-right text-capitalize">
                <span className="d-inline-block ms-2" style={{ width: 200 }}>
                  <Select value={selectedOption} onChange={this.handleChange} options={options} />
                </span>
              </div>
            </CardHeader>
            <Row className="g-0">
              <Col sm="6" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-10 bg-warning" />
                    <i className="lnr-cross-circle text-dark opacity-8" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Suspendend Accounts</div>
                    <div className="widget-numbers">2,382</div>
                    <div className="widget-description opacity-8 text-focus">
                      <div className="d-inline text-danger pe-1">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="ps-1">2.1%</span>
                      </div>
                      since last month
                    </div>
                  </div>
                </div>
                <div className="divider m-0 d-md-none d-sm-block" />
              </Col>
              <Col sm="6" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-9 bg-dark" />
                    <i className="lnr-cross text-white" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Restricted Accounts</div>
                    <div className="widget-numbers">
                      <CountUp start={0} end={230} separator="," decimals={0} decimal=","
                        prefix="" useEasing={false} suffix="" duration="3" />
                    </div>
                    {/* <div className="widget-description opacity-8 text-focus">
                      Grow Rate:
                      <span className="text-info ps-1">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="ps-1">14.1%</span>
                      </span>
                    </div> */}
                  </div>
                </div>
                <div className="divider m-0 d-md-none d-sm-block" />
              </Col>
              <Col sm="12" md="4" xl="4">
                <div className="card no-shadow rm-border bg-transparent widget-chart text-start">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg opacity-9 bg-danger" />
                    <i className="lnr-thumbs-down text-white" />
                  </div>
                  <div className="widget-chart-content">
                    <div className="widget-subheading">Blocked Accounts</div>
                    <div className="widget-numbers text-success">
                      <CountUp start={0} end={35} separator="" decimals={0} decimal="."
                        prefix="" useEasing={false} suffix="" duration="2" />
                    </div>
                    <div className="widget-description text-focus">
                      Increased by
                      <span className="text-warning ps-1">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="ps-1">7.35% </span>
                      </span>
                      since last month
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <CardFooter className="text-center d-block p-3">
              <a href="#/tables/datatables-complete-report"><Button color="primary" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                <span className="me-2 opacity-7">
                  {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                  <IoIosAnalytics color="#ffffff" />
                </span>
                <span className="me-1">View Complete Report</span>
              </Button></a>
            </CardFooter>
          </Card>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardHeader>
                  Recent Actions
                  <div className="btn-actions-pane-right">
                    <ButtonGroup size="sm">
                      <Button caret="true" color="focus" className={"active"}>
                        Last Week
                      </Button>
                      <Button caret="true" color="focus">
                        All Month
                      </Button>
                    </ButtonGroup>
                  </div>
                </CardHeader>
                <Table responsive hover striped borderless className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Account Name</th>
                      <th className="text-center">Reason</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">#345</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Abayomi Emmanuel</div>
                              <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Balance Limit Exceeded</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Suspendend</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Reactivate
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#347</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Adekunle Kamoru
                              </div>
                              <div className="widget-subheading opacity-7">
                                Tier 2 account
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Suspicious Transaction</td>
                      <td className="text-center">
                        <div className="badge bg-dark">Restricted</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                          Reactivate
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#321</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Elliot Huber</div>
                              <div className="widget-subheading opacity-7">
                                Tier 2 account
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">BVN</td>
                      <td className="text-center">
                        <div className="badge bg-danger">Blocked</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-3"} onClick={this.togglePop3}>
                          Reactivate
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#55</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Vinnie Wagstaff
                              </div>
                              <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Suspicious Transaction</td>
                      <td className="text-center">
                        <div className="badge bg-dark">Restricted</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-4"} onClick={this.togglePop4}>
                          Reactivate
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="d-block text-center">
                  <Button className="btn-wide" color="success">
                    Print
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6" lg="3" xl="3">
              <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-dark border-dark">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            {/* <small className="opacity-5">$</small> */}
                            <CountUp start={0} end={74} separator="" decimals={0} decimal="" prefix="" duration="30" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#/tables/datatables-failed-login"><h6 className="widget-subheading mb-0 opacity-5">
                      failed login attempts this month
                    </h6></a>
                  </div>
                  <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
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
                  </Row>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3" xl="3">
              <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-warning border-warning">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            {/* <small className="opacity-5">$</small> */}
                            <CountUp start={0} end={13} separator="" decimals={0} decimal="" prefix="" duration="20" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#/tables/datatables-failed-signup"><h6 className="widget-subheading mb-0 opacity-5">
                      failed sign up attempts
                    </h6></a>
                  </div>
                  <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
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
                  </Row>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3" xl="3">
              <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-primary border-primary">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            <small className="opacity-5"></small>
                            <CountUp start={0} end={128} separator="" decimals={0} decimal="" prefix="" duration="35" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#/tables/datatables-loggedin-users"><h6 className="widget-subheading mb-0 opacity-5">
                      logged in customers
                    </h6></a>
                  </div>
                  <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
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
                  </Row>
                </div>
              </div>
            </Col>
            <Col md="6" lg="3" xl="3">
              <div className="card mb-3 widget-chart widget-chart2 text-start card-btm-border card-shadow-success border-success">
                <div className="widget-chat-wrapper-outer">
                  <div className="widget-chart-content pt-3 ps-3 pb-1">
                    <div className="widget-chart-flex">
                      <div className="widget-numbers">
                        <div className="widget-chart-flex">
                          <div className="fsize-4">
                            <small className="opacity-5"></small>
                            <CountUp start={0} end={76128} separator="," decimals={0} decimal="" prefix="" duration="60" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#/tables/datatables-registered-users"><h6 className="widget-subheading mb-0 opacity-5">
                      registered customers
                    </h6></a>
                  </div>
                  <Row className="g-0 widget-chart-wrapper mt-3 mb-3 ps-2 he-auto">
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
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Card className="mb-3">
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                <i className="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> {" "} </i>
                Active Accounts
              </div>
              <div className="btn-actions-pane-right">
                <InputGroup>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <Input placeholder="Search..." />
                </InputGroup>
              </div>
            </CardHeader>
            <CardBody>
              <DataTable data={data}
                columns={columns}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
              />
            </CardBody>
          </Card>


        </Container>
      </Fragment>
    );
  }
}
