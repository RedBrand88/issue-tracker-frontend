import React, { Component } from 'react';
import Header from './Components/Header';
import ListView from './Components/ListView';


class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <ListView />
      </div>
    );
  }
}

export default App;
