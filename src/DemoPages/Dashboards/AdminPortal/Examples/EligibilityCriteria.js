import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Container,
} from "reactstrap";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
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

class BasicExample extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-primary text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Monthly Income</div>
                        <div className="widget-subtitle opacity-7" contentEditable="true">
                          Must be
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <small contentEditable="true">$450</small>
                          
                        </div>
                        <div className="widget-description ms-auto opacity-7">
                          {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                          <span className="ps-1" contentEditable="true">greater than</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-info text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Age</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers" contentEditable="true">60</div>
                        <div className="widget-description ms-auto opcity-5">
                          <span className="pe-1" contentEditable="true">Must be Less Than</span>
                          {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-focus text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title"  contentEditable="true">Eligibility Ratio</div>
                        <div className="widget-subtitle text-warning"  contentEditable="true">
                          Must be greater than
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers"  contentEditable="true">
                          27
                          <small contentEditable="true">%</small>
                        </div>
                        <div className="widget-description ms-auto text-warning">
                          {/* <span className="pe-1">45</span>
                          <FontAwesomeIcon icon={faAngleUp} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-vicious-stance text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title"  contentEditable="true">Credit Score</div>
                        <div className="widget-subtitle text-success" contentEditable="true">
                          Must be greater than
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-warning" contentEditable="true">357</div>
                        <div className="widget-description ms-auto text-success">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1" contentEditable="true">55</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-slick-carbon text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Debt-to-Income Ratio</div>
                        <div className="widget-subtitle text-danger" contentEditable="true">Must be less than</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-danger" contentEditable="true">37%</div>
                        {/* <div className="widget-description ms-auto text-danger">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="ps-1">27.2%</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart widget-chart2 bg-night-sky text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Origination Fee</div>
                        {/* <div className="widget-subtitle text-white">
                          Submitted
                        </div> */}
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers text-white" contentEditable="true">8%</div>
                        {/* <div className="widget-description ms-auto text-success">
                          <FontAwesomeIcon icon={faArrowRight} />
                          <span className="pe-1">8%</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default BasicExample;
