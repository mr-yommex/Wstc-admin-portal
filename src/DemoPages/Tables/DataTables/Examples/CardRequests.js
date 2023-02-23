import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Row, Col, Card, CardBody, CardHeader, Input, InputGroup } from "reactstrap";

import DataTable from 'react-data-table-component';

import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageTitle from "../../../../Layout/AppMain/PageTitle";
import AppLogo from "../../../../Layout/AppLogo/";

import { makeData } from "./CardRequestsUtils";

export default class DataTableFixedHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData(),
        };
    }

    render() {
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
                selector: row => row.approve,
                sortable: true,
              },



            // {
            //     name: "Update Status",
            //     selector: row => row.change,
            //     sortable: true,
            // },

            // {
            //     name: "Updated By",
            //     selector: row => row.update,
            //     sortable: true,
            // },

            // {
            //     name: <div className="btn-actions-pane-right">
            //         <InputGroup>
            //             <div className="input-group-text">
            //                 <FontAwesomeIcon icon={faSearch} />
            //             </div>
            //             <Input placeholder="Search..." />
            //         </InputGroup>
            //     </div>,
            //     selector: row => row.submit,
            //     sortable: true,
            // },
        ];

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
                                            heading="Card Requests"
                                            icon="lnr-hourglass icon-gradient bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize fw-normal">
                                        <i className="header-icon lnr-laptop-phone me-3 text-muted opacity-6"> {" "} </i>
                                        Card Requests
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
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
