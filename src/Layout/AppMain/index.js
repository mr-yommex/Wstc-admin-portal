import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

const UserPages = lazy(() => import("../../DemoPages/UserPages"));
const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));
const Tables = lazy(() => import("../../DemoPages/Tables"));


const AppMain = () => {

    return (
        <Fragment>

            {/* Tables */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Tables examples
                            <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tables" component={Tables}/>
            </Suspense>

            {/* Pages */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale-party"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Pages examples
                            <small>Because this is a demonstration we load at once all the Pages examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/pages" component={UserPages}/>
            </Suspense>

            {/* Dashboards */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                    <div className="text-center">
                            <Loader type="ball-pulse-sync"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load the Dashboard
                            {/* <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small> */}
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards}/>
            </Suspense>


            <Route exact path="/" render={() => (
                <Redirect to="/pages/login"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;
