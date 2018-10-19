import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/LoginForm'
import Grid from '@material-ui/core/Grid'
class App extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" >
          <Grid item xs={9}  md={5} lg={3} style={{marginTop:"10vh"}}>
            <Login />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
