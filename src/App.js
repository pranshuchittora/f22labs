import React, { Component } from "react";
import localStyles from "./App.css";
import Login from "./components/Login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import classNames from "classnames";

import Grid from "@material-ui/core/Grid";

const LoginPage = () => (
  <Grid container justify="center" className={classNames(localStyles.loginBkg)}>
    <Grid item xs={9} md={5} lg={3} style={{ marginTop: "10%" }}>
      <Login />
    </Grid>
  </Grid>
);

const DashboardPage = () => (
  <div className={classNames(classNames.dashboardBkg)}>
  
    <Dashboard />
  
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route path="/dashboard" render={() => <DashboardPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
