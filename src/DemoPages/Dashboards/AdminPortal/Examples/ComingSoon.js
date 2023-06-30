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
            
            <Col sm="12" md="12" xl="12">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                
                  {/* <div className="widget-numbers">
                    <CountUp start={0} end={2202} separator="" decimals={0} decimal=","
                      prefix="" useEasing={false} suffix="" duration="6" />
                  </div> */}
                  <div className="widget-subheading fsize-1 pt-2 opacity-10 text-success fw-bold">
                    COMING SOON
                  </div>
                  {/* <div className="widget-description opacity-8">
                    Compared to last month:
                    <span className="text-info ps-1">
                      <FontAwesomeIcon icon={faAngleDown} />
                      <span className="ps-1">1.4%</span>
                    </span>
                  </div> */}
                </div>
                {/* <div className="widget-chart-wrapper">
                  <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                    <AreaChart data={data2} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area type="monotoneX" dataKey="uv" strokeWidth="2"
                        stroke="#28a745" fill="#28a745" fillOpacity=".3" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div> */}
              </div>
            </Col>
            
          </Row>
        
          {/* <Card className="mb-3">
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
          </Card> */}


        </Container>
      </Fragment>
    );
  }
}
