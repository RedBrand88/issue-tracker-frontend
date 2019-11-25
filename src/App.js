import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Breadcrumb from './Components/Breadcrumb'




class App extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Router>
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: 100 }}>
                <Breadcrumb />
                <IconButton style={{ float: 'right' }}>
                  <AddCircleOutlineIcon fontSize='large' />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={12}>
              <BaseRouter />
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
