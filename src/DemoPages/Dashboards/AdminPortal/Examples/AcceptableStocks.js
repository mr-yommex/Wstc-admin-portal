import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Container,
  Card,
  CardFooter,
  Table,
  Input,
  InputGroup,
} from "reactstrap";

import {
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AnalyticsDashboard1 extends Component {
  render() {

    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardHeader>
                  Acceptable Stocks for Collateral
                  <div className="btn-actions-pane-right">
                <InputGroup>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <Input placeholder="Search..." />
                </InputGroup>
              </div>
                </CardHeader>
                <Table responsive hover striped borderless className="align-middle mb-0">
                  <thead>
                    <tr>
                      <th className="text-center">Symbol</th>
                      <th>Name</th>
                      {/* <th className="text-center">Last Sale</th>
                      <th className="text-center">Net Change</th> */}
                      <th className="text-center">Remove Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">AAPL</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Apple Inc. Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-danger">$148.02</td>
                      <td className="text-center">
                        <div className="text-center text-danger">0.46%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">AAL</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">American Airlines Group Inc. Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$15.42</td>
                      <td className="text-center">
                        <div className="text-center text-success">1.46%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">TSLA</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Tesla Inc. Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$198.28</td>
                      <td className="text-center">
                        <div className="text-center text-success">2.46%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">MSFT</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Microsoft Corporation Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-danger">$253.82</td>
                      <td className="text-center">
                        <div className="text-center text-danger">0.91%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">IBM</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">International Business Machines Corporation Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-danger">$130.45</td>
                      <td className="text-center">
                        <div className="text-center text-danger">0.12%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">AMZN</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Amazon.com Inc. Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$95.67</td>
                      <td className="text-center">
                        <div className="text-center text-success">0.16%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">MTN</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Vail Resorts Inc. Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$240.99</td>
                      <td className="text-center">
                        <div className="text-center text-success">3.78%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">BABA</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$93.11</td>
                      <td className="text-center">
                        <div className="text-center text-success">0.02%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">GOOG</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Alphabet Inc. Class C Capital Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-danger">$95.63</td>
                      <td className="text-center">
                        <div className="text-center text-danger">0.10%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">NVDA</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">NVIDIA Corporation Common Stock</div>
                              {/* <div className="widget-subheading opacity-7">
                                Tier 1 account
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="text-center text-success">$207.72</td>
                      <td className="text-center">
                        <div className="text-center text-success">0.36%</div>
                      </td> */}
                      <td className="text-center">
                        <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                          Remove
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
        </Container>
      </Fragment>
    );
  }
}
