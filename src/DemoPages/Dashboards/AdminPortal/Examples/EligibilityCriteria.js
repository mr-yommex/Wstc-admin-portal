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
                <Col md="6">
                  <div className="card mb-3 widget-chart widget-chart2 bg-primary text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Credit Score</div>
                        <div className="widget-subtitle opacity-7" contentEditable="true">
                          Must be
                        </div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers">
                          <small contentEditable="true">50</small>

                        </div>
                        <div className="widget-description ms-auto opacity-7">
                          {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                          <span className="ps-1" contentEditable="true">greater than</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="card mb-3 widget-chart widget-chart2 bg-info text-start">
                    <div className="widget-chart-content text-white">
                      <div className="widget-chart-flex">
                        <div className="widget-title" contentEditable="true">Maintain Ratio</div>
                      </div>
                      <div className="widget-chart-flex">
                        <div className="widget-numbers" contentEditable="true">0.7%</div>
                        <div className="widget-description ms-auto opcity-5">
                          <span className="pe-1" contentEditable="true">Exact Value</span>
                          {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                        </div>
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
