import React from 'react';
import TicketListView from './Containers/TicketListView';
import TicketDetailView from './Containers/TicketDetailView';
import { Route } from 'react-router-dom';
import CreateTicketFormView from './Containers/CreateTicketFormView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TicketListView}/>
        <Route exact path='/create-ticket' component={CreateTicketFormView}/>
        <Route exact path='/view-ticket/:ticketID' component={TicketDetailView}/>
    </div>
);

export default BaseRouter;