import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MainHeader from './Components/MainHeader/MainHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from './Store/Actions/auth';

import LandingView from './Containers/LandingView/LandingView';
import BaseRouter from './routes';
import MainFooter from './Components/MainFooter/MainFooter';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Fragment>
        <Router>
          <MainHeader {...this.props} />
          <main className="mainBody">
            <Switch>
              <Route exact path='/'>
                <LandingView />
              </Route>
              <Route path='/'>
                <BaseRouter />
              </Route>
            </Switch>
          </main>
          <MainFooter />
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: localStorage.getItem('token') !== null
    // isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
