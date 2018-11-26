import React, { Component } from 'react';
import './App.css';
import NewAuctionPage from './NewAuctionPage';
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/auctions/new" exact component={NewAuctionPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
