import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingView from './Containers/LandingView';
import Layout from './Containers/Layout';
import BaseRouter from './routes';


class App extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/'>
                <LandingView />
              </Route>
              <Route path='/'>
                <Layout>
                  <BaseRouter />
                </Layout>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
