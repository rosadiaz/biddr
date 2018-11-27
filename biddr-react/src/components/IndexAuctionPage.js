import React, { Component } from 'react';
import { Auction } from './requests';
import { Link } from 'react-router-dom';

class IndexAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: []
    }
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({ 
        auctions: auctions
      })
    })
  }

  render() {
    return (
      <main>
        <h1>Auctions List</h1>
        <div>
            <ul>
              {this.state.auctions.map(auction => (
                <li key={auction.id}>
                  <small><b>{"# "}{auction.id}</b></small> {" "}
                  <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                </li>
              ))}
            </ul>
        </div>
      </main>
    );
  }
}

export default IndexAuctionPage;