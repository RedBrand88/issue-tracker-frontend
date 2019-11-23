import React, { Component } from 'react';
import Header from './Components/Header';
import TicketListView from './Containers/TicketListView';


class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <TicketListView />
      </div>
    );
  }
}

export default App;
