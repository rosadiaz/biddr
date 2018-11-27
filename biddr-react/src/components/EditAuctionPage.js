import React, { Component } from "react";
import AuctionForm from "./AuctionForm";
import { Auction } from "./requests";

class EditAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: null
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
  
  editAuction = (formData) => {
    Auction.update(formData)
    .then((res) => {
      console.log("success", res);
      // this.props.history.push(`/`);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  form() {
    if(this.state.auction) {
      return <AuctionForm auction={this.state.auction} onSubmit={this.editAuction}/>;
    }
  }

  render() {
    return (
      <main className="EditAuctionPage">
        <h1>Edit Auction</h1>
        {this.form()}
      </main>
    );
  }
}
export default EditAuctionPage; 