import React, { Component, Fragment } from "react";
import classnames from "classnames";

import {
    Row,
    Col,
    Container,
    Input,
    InputGroup,
    Card,
    CardBody,
    CardHeader,
} from "reactstrap";

import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import { makeData } from "../../../Tables/DataTables/Examples/AssignRoleUtils";
import DataTable from 'react-data-table-component';

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

export default class CRMDashboard1 extends Component {
    
    constructor(props) {
        super(props);

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
        

        this.toggle2 = this.toggle2.bind(this);
        this.togglePop1 = this.togglePop1.bind(this);
        this.togglePop2 = this.togglePop2.bind(this);
        this.togglePop3 = this.togglePop3.bind(this);
        this.togglePop4 = this.togglePop4.bind(this);

        this.state = {
            activeTab2: "222",
            activeTab1: "11",
            popoverOpen1: false,
            popoverOpen2: false,
            popoverOpen3: false,
            popoverOpen4: false,
        };
    }

    toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
            this.setState({
                activeTab2: tab,
            });
        }
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab,
            });
        }
    }

    togglePop1() {
        this.setState({
            popoverOpen1: !this.state.popoverOpen1,
        });
    }

    togglePop2() {
        this.setState({
            popoverOpen2: !this.state.popoverOpen2,
        });
    }

    togglePop3() {
        this.setState({
            popoverOpen3: !this.state.popoverOpen3,
        });
    }

    togglePop4() {
        this.setState({
            popoverOpen4: !this.state.popoverOpen4,
        });
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
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },

      {
        name: "Set Role",
        selector: row => row.limit,
        sortable: true,
      },

      {
        selector: row => row.suspend,
        sortable: true,
      },

    ];
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col md="6" xl="4">
                            <div className="card mb-3 widget-content bg-night-fade">
                                <div className="widget-content-wrapper text-white">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Total Users</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-white">
                                            <CountUp end={18} duration="3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" xl="4">
                            <div className="card mb-3 widget-content bg-arielle-smile">
                                <div className="widget-content-wrapper text-white">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Admins</div>
                                        {/* <div className="widget-subheading">
                                            Total Clients Profit
                                        </div> */}
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-white">
                                            <CountUp start={0} end={8} separator="" decimals={0}
                                                decimal="," prefix="" duration="3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" xl="4">
                            <div className="card mb-3 widget-content bg-happy-green">
                                <div className="widget-content-wrapper text-white">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Regular Users</div>
                                        {/* <div className="widget-subheading">People Interested</div> */}
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-white">
                                            <CountUp start={0} end={10} separator="" decimals={0}
                                                decimal="," prefix="" suffix="" duration="3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Card className="mb-3">
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                <i className="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> {" "} </i>
                Assign Role
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
