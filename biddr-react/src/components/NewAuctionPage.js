import React, { Component } from 'react';
import { Auction } from './requests';
import AuctionForm from './AuctionForm';

class NewAuctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //loading: true,
      //_______: null
    }
  }

  componentDidMount() {
    //this.setState({ loading: false })

  }

  createAuction(formData) {
    Auction.create(formData)
    .then((res) => console.log("success", res))
    .catch((error) => console.log(error))
  }

  render() {
    //if (this.state.loading) {
      // return (
      //   <div>
      //     <main>
      //       <h2>Loading ...</h2>
      //     </main>
      //   </div>
      // );
    //}
    return (
      <div>
      	<h1> New Auction </h1>
        <AuctionForm onSubmit={this.createAuction}/>
      </div>
    );
  }
}

export default NewAuctionPage;