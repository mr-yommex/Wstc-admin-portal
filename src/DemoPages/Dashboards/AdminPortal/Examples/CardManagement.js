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

import { makeData } from "../../../Tables/DataTables/Examples/CardUtils";

import {
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const data123 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

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
        name: "Expiry date",
        selector: row => row.date,
        sortable: true,
      },

      {
        name: "Set Limit",
        selector: row => row.limit,
        sortable: true,
      },

      {
        selector: row => row.suspend,
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
          <Row>
            <Col sm="12" md="6" xl="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded">
                    <div className="icon-wrapper-bg bg-warning" />
                    <i className="lnr-hourglass text-warning" />
                  </div>
                  <div className="widget-numbers">
                    <CountUp start={0} end={255} separator="" decimals={0} decimal="."
                      prefix="" useEasing={false} suffix="" duration="6" />
                  </div>
                  <div className="widget-subheading fsize-1 pt-2 opacity-10 text-warning fw-bold">
                    Pending Card Requests
                  </div>
                  <div className="widget-description opacity-8">
                    <span className="text-danger pe-1">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="ps-1">3.1%</span>
                    </span>
                    down last 30 days
                  </div>
                </div>
                <div className="widget-chart-wrapper">
                  <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                    <LineChart data={data123} margin={{ top: 0, right: 25, left: 25, bottom: 0 }}>
                      <Line type="monotone" dataKey="pv" stroke="#f7b924" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6" xl="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded">
                    <div className="icon-wrapper-bg bg-success" />
                    <i className="lnr-checkmark-circle text-success" />
                  </div>
                  <div className="widget-numbers">
                    <CountUp start={0} end={2202} separator="" decimals={0} decimal=","
                      prefix="" useEasing={false} suffix="" duration="6" />
                  </div>
                  <div className="widget-subheading fsize-1 pt-2 opacity-10 text-success fw-bold">
                    Successful Card Requests
                  </div>
                  <div className="widget-description opacity-8">
                    Compared to last month:
                    <span className="text-info ps-1">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="ps-1">1.4%</span>
                    </span>
                  </div>
                </div>
                <div className="widget-chart-wrapper">
                  <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                    <AreaChart data={data2} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area type="monotoneX" dataKey="uv" strokeWidth="2"
                        stroke="#28a745" fill="#28a745" fillOpacity=".3" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col sm="12" md="12" xl="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="lnr-diamond text-primary" />
                  </div>
                  <div className="widget-numbers">
                    <CountUp start={0} end={59344} separator="," decimals={0} decimal=","
                      prefix="" useEasing={false} suffix="" duration="6" />
                  </div>
                  <div className="widget-subheading fsize-1 pt-2 opacity-10 text-primary fw-bold">
                    Total Active Cards
                  </div>
                  <div className="widget-description opacity-8">
                    All Time
                    {/* <span className="text-success ps-1">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="ps-1">21.8%</span>
                    </span> */}
                  </div>
                </div>
                <div className="widget-chart-wrapper">
                  <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                    <AreaChart data={data123} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area type="stepAfter" dataKey="uv" strokeWidth="2"
                        stroke="#007bff" fill="#007bff" fillOpacity=".4" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mbg-3">
            <a href="#/tables/datatables-card-requests"><Button color="focus" className="btn-wide btn-pill btn-shadow fsize-1" size="lg">
              <span className="me-2 opacity-7">
                {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                <IoIosAnalytics color="#ffffff" />
              </span>
              View Complete Report
            </Button></a>
          </div>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardHeader>
                  Recent Pending Requests
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
                      <th className="text-center">Account Number</th>
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
                      <td className="text-center">0014256262</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Approve
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
                      <td className="text-center">0082735322</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                          Approve
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
                      <td className="text-center">0026356272</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-3"} onClick={this.togglePop3}>
                          Approve
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
                      <td className="text-center">0027253624</td>
                      <td className="text-center">
                        <div className="badge bg-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-4"} onClick={this.togglePop4}>
                          Approve
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
          <Card className="mb-3">
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                <i className="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> {" "} </i>
                Active Cards
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
