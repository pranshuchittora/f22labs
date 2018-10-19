import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/LoginForm'
import Grid from '@material-ui/core/Grid'
class App extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Login />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
