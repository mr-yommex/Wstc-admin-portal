import React, { Component, Fragment } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import { faStar, faBusinessTime, faAddressBook, faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toast, Slide } from "react-toastify";

export default class TitleComponent2 extends Component {
  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }



  render() {
    return (
      <Fragment>
        <Button href="#/dashboards/adminportal" className="btn-shadow me-3" onClick={this.notify22} color="dark">
          <FontAwesomeIcon icon={faHome} />
        </Button>
        <UncontrolledDropdown className="d-inline-block">
          <DropdownToggle color="info" className="btn-shadow" caret>
            <span className="btn-icon-wrapper pe-2 opacity-7">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            Actions
          </DropdownToggle>
          <DropdownMenu end>
            <Nav vertical>
              <NavItem>
                <NavLink href="#/pages/login">
                  <i className="nav-link-icon lnr-power-switch"> </i>
                  <span>Logout</span>
                  {/* <div className="ms-auto badge rounded-pill bg-secondary">
                    86
                  </div> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/pages/forgot-password">
                  <i className="nav-link-icon lnr-cog"> </i>
                  <span>Change Password</span>
                  {/* <div className="ms-auto badge rounded-pill bg-danger">5</div> */}
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#">
                  <i className="nav-link-icon lnr-picture"> </i>
                  <span>Picture</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">
                  <i className="nav-link-icon lnr-file-empty"> </i>
                  <span>File Disabled</span>
                </NavLink>
              </NavItem> */}
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
