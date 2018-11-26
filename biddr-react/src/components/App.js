import React, { Component } from 'react';
import './App.css';
import Auction from './NewAuctionPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Biddr</h1>
          <Auction/>
        </header>
      </div>
    );
  }
}

export default App;
