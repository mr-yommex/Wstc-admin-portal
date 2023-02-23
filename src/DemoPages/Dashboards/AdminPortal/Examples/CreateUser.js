import React, { Fragment, Component } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitleAlt from '../../../../Layout/AppMain/PageTitleAlt';

import Sticky from 'react-stickynode';

import cx from 'classnames';
import { Elastic } from 'react-burgers'

import {
    TabContent, TabPane, DropdownItem,
    CardBody, Collapse, FormGroup, Label, Input, FormFeedback, FormText,
    Card, Col, Row, CardHeader,
    Button
} from 'reactstrap';

import classnames from 'classnames';

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
                    <CSSTransition className={cx("app-inner-layout chat-layout", {
                        'open-mobile-menu': this.state.active,
                    })}
                        component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <div>
                            <div className="app-inner-layout__wrapper row-fluid g-0">

                                <Card className="col-md-12 app-inner-layout__content">
                                    <div className="pb-5 ps-5 pe-5 pt-3">
                                        <div className="mobile-app-menu-btn mb-3">
                                            <Elastic width={26} lineHeight={2} lineSpacing={5} color='#6c757d' active={this.state.active}
                                                onClick={() => this.setState({ active: !this.state.active })} />
                                        </div>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <div id="accordion" className="accordion-wrapper mb-3">
                                                    <Card>
                                                        <CardHeader id="headingOne">
                                                            <Button block color="link" className="text-start m-0 p-0"
                                                                onClick={() => this.toggleAccordion(0)}
                                                                aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                                                                <h3 className="form-heading">
                                                                    Create New User
                                                                    <p>Enter user informations below</p>
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
                                                                            <Input type="text" name="firstname" id="exampleEmail2"
                                                                            />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <FormGroup>
                                                                            <Label for="exampleEmail2">Lastname</Label>
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
                                                                    <Col md={6}>
                                                                        <FormGroup>
                                                                            <Label for="exampleCity">Email</Label>
                                                                            <Input type="text" name="Email" id="exampleEMail2" placeholder="@" />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <FormGroup>
                                                                            <Label for="exampleState">Phone Number</Label>
                                                                            <Input type="text" name="phone" id="exampleState" />
                                                                        </FormGroup>
                                                                    </Col>
                                                                    <Col md={2}>
                                                                        <FormGroup>
                                                                            <Label for="exampleState">Role</Label>
                                                                            <Input type="select" id="exampleCustomSelect" name="customSelect">
                                                                                <option value="">Select</option>
                                                                                <option>Regular</option>
                                                                                <option>Admin</option>
                                                                            </Input>
                                                                        </FormGroup>,
                                                                    </Col>
                                                                </Row>
                                                            </CardBody>
                                                        </Collapse>
                                                    </Card>
                                                </div>
                                                <div className="mt-5" />
                                                <div className="clearfix">
                                                    <div className="text-center">
                                                        <Button color="primary" size="lg"
                                                            className="btn-pill btn-wide btn-shadow">
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </div>
                                            </TabPane>


                                        </TabContent>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}
