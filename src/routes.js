import React from 'react';
import TicketListView from './Containers/TicketListView';
import TicketDetailView from './Containers/TicketDetailView';
import { Route } from 'react-router-dom';
import CreateTicketFormView from './Containers/CreateTicketFormView';
import UpdateTicketFormView from './Containers/UpdateTicketFormView';
import LandingView from './Containers/LandingView/LandingView';
import Login from './Containers/Login';
import Signup from './Containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={LandingView}/>
        <Route exact path='/view-tickets' component={TicketListView}/>
        <Route exact path='/create-ticket' component={CreateTicketFormView}/>
        <Route exact path='/view-ticket/:ticketID' component={TicketDetailView}/>
        <Route exact path='/view-ticket/edit/:ticketID' component={UpdateTicketFormView}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/sign-up' component={Signup}/>
    </div>
);

export default BaseRouter;