import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Dashboard from "./pages/Dashboard/index";
import NotFound from "./pages/NotFound/index";

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
  </Router>
);

export default Routes;