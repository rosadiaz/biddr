import React, { Component } from "react";
import { Auction, Bid } from "./requests";
// import { Link } from "react-router-dom"

class ShowAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      auction: null,
      bids: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      this.setState({
        auction: auction,
      });
    });
    Bid.all(id).then(bids => {
      this.setState({
        bids: bids,
        loading: false
      })
    })
    
  }

  render() {
    if (!this.state.auction) {
      return (
        <main className="ShowAuctionPage">
          <h1>Auction doesn't exist!</h1>
        </main>
      );
    }
    if (!this.state.loading) {
      return (
        <main className="ShowAuctionPage">
        {console.log("MOUNT: ", this.state)}
          <h2># {this.state.auction.id} {this.state.auction.title}</h2>
          <div className="AuctionInfo">
            <div className="Auction">
              <h3>${this.state.auction.reserve_price} reserve price</h3>
              <p>{this.state.auction.details}</p>
              <em><p>Bidding will close on {this.state.auction.end_date}</p></em>
              {/* <Link to={`/auctions/${this.state.auction.id}/edit`}> <button>Edit</button></Link> */}
            </div>
            <div className="Bids">
              <h2>Bids</h2>
              <ul>
              {this.state.bids.map(bid => (
                <li key={bid.id}>$ {bid.bid_price}</li>
              ))}
            </ul>
            </div>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          Loading...
        </main>
      )
    }
  }
}
export default ShowAuctionPage;