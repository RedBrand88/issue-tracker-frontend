import React from 'react';
import TicketListView from './Containers/TicketListView';
import TicketDetailView from './Containers/TicketDetailView';
import { Route } from 'react-router-dom';
import CreateTicketFormView from './Containers/CreateTicketFormView';
import UpdateTicketFormView from './Containers/UpdateTicketFormView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TicketListView}/>
        <Route exact path='/create-ticket' component={CreateTicketFormView}/>
        <Route exact path='/view-ticket/:ticketID' component={TicketDetailView}/>
        <Route exact path='/view-ticket/edit/:ticketID' component={UpdateTicketFormView}/>
    </div>
);

export default BaseRouter;