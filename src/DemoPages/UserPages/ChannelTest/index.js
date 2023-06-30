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

  Input, Collapse, Label, FormGroup
} from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageTitle from "../../../Layout/AppMain/PageTitle";
import AppLogo from "../../../Layout/AppLogo/";


export default class FaqSection extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: '1',
        active: false,
        collapse: false,
        accordion: [true, false, false],
        custom: [true, false],
        status: 'Closed',
        fadeIn: true,
        timeout: 300,
    };
}

  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    this.setState({
        accordion: state,
    });
}

toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab
        });
    }
}


  render() {


    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <div className="app-inner-layout">
                <div className="app-inner-layout__header-boxed p-0">
                  <div className="app-inner-layout__header page-title-icon-rounded text-white bg-primary mb-4">
                    <a href="#/dashboards/adminportal"><AppLogo /></a>
                    <PageTitle
                      heading="Customer Channels"
                      icon="lnr-user icon-gradient bg-primary" />
                  </div>
                </div>
              </div>
              
              <Container fluid>
                <Row>

                  <Col sm="12" md="12" xl="12">
                    <div className="card mb-3 widget-chart">
                      <div className="widget-chart-content">
                        {/* <div className="icon-wrapper rounded">
                          <div className="icon-wrapper-bg bg-success" />
                          <i className="lnr-checkmark-circle text-success" />
                        </div> */}
                        <div className="widget-numbers">
                          CUSTOMER_NAME
                        </div>
                        <div className="widget-subheading fsize-1 pt-2 opacity-10 text-success fw-bold">
                          Status: CUSTOMER_STATUS
                        </div>
                        {/* <div className="widget-description opacity-8">
                          Compared to last month:
                          <span className="text-info ps-1">
                            <FontAwesomeIcon icon={faAngleDown} />
                            <span className="ps-1">1.4%</span>
                          </span>
                        </div> */}
                      </div>

                    </div>
                  </Col>

                </Row>

                <Row>
                  <Col md="12">
                    <Card className="main-card mb-3">
                      <CardHeader>
                        ACTIVE CHANNELS
                        {/* <div className="btn-actions-pane-right">
                          <ButtonGroup size="sm">
                            <Button caret="true" color="focus" className={"active"}>
                              Last Week
                            </Button>
                            <Button caret="true" color="focus">
                              All Month
                            </Button>
                          </ButtonGroup>
                        </div> */}
                      </CardHeader>
                      <Table responsive hover striped borderless className="align-middle mb-0">
                        <thead>
                          <tr>
                            <th className="text-center">Name</th>

                            <th className="text-center">Date</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Change Limit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center text-muted">USSD</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading text-center">24/02/2023</div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Active</td>
                            <td className="text-center" contentEditable="true">
                              200,000
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                                Update
                              </Button>
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="danger" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                                Remove
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">MOBILE</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading text-center">
                                      10/01/2023
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Active</td>
                            <td className="text-center" contentEditable="true">
                              5,000,000
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="primary" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                                Update
                              </Button>
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="danger" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                                Remove
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center text-muted">WEB</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  {/* <div className="widget-content-left me-3">
                              <div className="widget-content-left">
                                <img width={40} className="rounded-circle" src={avatar2} alt=""/>
                              </div>
                            </div> */}
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading text-center">04/01/2023</div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Active</td>
                            <td className="text-center" contentEditable="true">
                              2,000,000
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="primary" id={"PopoverCustomT-1"} onClick={this.togglePop1}>
                                Update
                              </Button>
                            </td>
                            <td className="text-center">
                              <Button size="sm" color="danger" id={"PopoverCustomT-2"} onClick={this.togglePop2}>
                                Remove
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <CardFooter className="d-block text-center">

                      </CardFooter>

                    </Card>
                  </Col>
                </Row>

                <div id="accordion" className="accordion-wrapper mb-3">
                  <Card>
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-start m-0 p-0"
                        onClick={() => this.toggleAccordion(0)}
                        aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h3 className="form-heading">
                          ADD CHANNEL
                          <p>Add a new channel for this user below</p>
                        </h3>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion"
                      id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail2">Firstname</Label>
                              <Input type="text" name="firstname" id="exampleEmail2" readOnly="true" placeholder="customer_firstname"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail2">Lastname</Label>
                              <Input type="text" name="lastname" id="exampleEmail2" readOnly="true" placeholder="customer_lastname"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        {/* <FormGroup>
                                                                    <Label for="exampleAddress">Email</Label>
                                                                    <Input type="Email" name="Email" id="exampleEmail2"
                                                                        placeholder="@" />
                                                                </FormGroup> */}
                        <Row>
                        <Col md={2}>
                            <FormGroup>
                              <Label for="exampleState">Channel</Label>
                              <Input type="select" id="exampleCustomSelect" name="customSelect">
                                <option value="">Select</option>
                                <option>USSD</option>
                                <option>MOBILE</option>
                                <option>WEB</option>
                              </Input>
                            </FormGroup>,
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleCity">Description</Label>
                              <Input type="text" name="Email" id="exampleEMail2" placeholder="" />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for="exampleState">Default Limit</Label>
                              <Input type="text" name="phone" id="exampleState" readOnly="true" placeholder="200,000" />
                            </FormGroup>
                          </Col>
                          
                        </Row>
                      </CardBody>
                    </Collapse>
                    
                  </Card>
                  <div className="mt-5" />
                                                <div className="clearfix">
                                                    <div className="text-center">
                                                        <Button color="primary" size="lg"
                                                            className="btn-pill btn-wide btn-shadow">
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </div><br /> <br />
                </div>
              </Container>


            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
