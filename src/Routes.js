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

const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
      <Component />
    ) : (
      <Redirect to="/register" />
    );
};

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" render={authGuard(Dashboard)} />
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
  </Router>
);

export default Routes;