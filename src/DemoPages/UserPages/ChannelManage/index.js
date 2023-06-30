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
                      heading="Channel Management"
                      icon="lnr-user icon-gradient bg-primary" />
                  </div>
                </div>
              </div>
              
              <Container fluid>
                

                <Row>
                  <Col md="12">
                    <Card className="main-card mb-3">
                      <CardHeader>
                        AVAILABLE CHANNELS
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

                            <th className="text-center">Description</th>
                            <th className="text-center">Channel Code</th>
                            <th className="text-center">Default Limit</th>
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
                                    <div className="widget-heading text-center">*123#</div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">001</td>
                            <td className="text-center" contentEditable="true">
                              200,000
                            </td>
                            
                          </tr>
                          <tr>
                            <td className="text-center text-muted">MOBILE</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading text-center">
                                      Mobile App
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">002</td>
                            <td className="text-center" contentEditable="true">
                              5,000,000
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
                                    <div className="widget-heading text-center">wstc.com</div>

                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">003</td>
                            <td className="text-center" contentEditable="true">
                              2,000,000
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
                          CREATE NEW CHANNEL
                          <p>Add a new channel below</p>
                        </h3>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion"
                      id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail2">Name</Label>
                              <Input type="text" name="firstname" id="exampleEmail2"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail2">Description</Label>
                              <Input type="text" name="lastname" id="exampleEmail2"
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
                
                          <Col md={3}>
                            <FormGroup>
                              <Label for="exampleCity">Channel Code</Label>
                              <Input type="text" name="Email" id="exampleEMail2" placeholder="" />
                            </FormGroup>
                          </Col>
                          <Col md={3}>
                            <FormGroup>
                              <Label for="exampleState">Default Limit</Label>
                              <Input type="text" name="phone" id="exampleState"/>
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
