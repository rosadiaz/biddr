import React, { Component } from "react";
import { Auction } from "./requests";

class ShowAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      this.setState({
        auction: auction,
      });
    });
  }

  render() {
    if (!this.state.auction) {
      return (
        <main className="ShowAuctionPage">
          <h1>Auction doesn't exist!</h1>
        </main>
      );
    }
    return (
      <main className="ShowAuctionPage">
        <h2>{this.state.auction.id} - {this.state.auction.title}</h2>
        <p>{this.state.auction.details}</p>
      </main>
    );
  }
}
export default ShowAuctionPage;