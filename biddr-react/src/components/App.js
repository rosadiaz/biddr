import React, { Component } from 'react';
import './App.css';
import NewAuctionPage from './NewAuctionPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from './WelcomePage';
import NavBar from './NavBar';
import IndexAuctionPage from './IndexAuctionPage';
import ShowAuctionPage from './ShowAuctionPage';
import EditAuctionPage from './EditAuctionPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/auctions" exact component={ IndexAuctionPage} />
            <Route path="/auctions/new" exact component={NewAuctionPage} />
            <Route path="/auctions/:id" exact component={ShowAuctionPage} />
            <Route path="/auctions/:id/edit" exact component={EditAuctionPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
