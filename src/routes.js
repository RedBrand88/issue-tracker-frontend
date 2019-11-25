import React from 'react';
import TicketListView from './Containers/TicketListView';
import TicketDetailView from './Containers/TicketDetailView';
import { Route } from 'react-router-dom';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TicketListView}/>
        <Route exact path='/:ticketID' component={TicketDetailView}/>
    </div>
);

export default BaseRouter;