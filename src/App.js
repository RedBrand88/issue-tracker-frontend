import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from './Store/Actions/auth';

import LandingView from './Containers/LandingView';
import Layout from './Containers/Layout';
import BaseRouter from './routes';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Router>
          <div>
            <Header {...this.props}/>
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
