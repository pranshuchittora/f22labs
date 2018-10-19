import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/LoginForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

const LoginPage = () => (
  <Grid container justify="center">
    <Grid item xs={9} md={5} lg={3} style={{ marginTop: "10%" }}>
      <Login />
    </Grid>
  </Grid>
);

const Dashboard = () => (
  <h1>Dashboard</h1>
)

class App extends Component {
  render() {
    return(
      <Router>
    <div>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
    </div>
    </Router>)
  }
}

export default App;
