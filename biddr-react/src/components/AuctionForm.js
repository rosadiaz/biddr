import React, { Component } from "react";

class AuctionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: props.auction || {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    this.onSubmit({
      id: this.state.auction.id,
      title: formData.get("title"),
      details: formData.get("details"),
      end_date: formData.get("end_date"),
      reserve_price: formData.get("reserve_price")
    });
  };

  handleChange = event => {
    const name = event.currentTarget.name;
    const value = event.target.value;

    switch(name) {
      case 'title':
        return this.setState({auction: { ...this.state.auction, title: value }});
      case 'details':
        return this.setState({auction: { ...this.state.auction, details: value }});
      case 'end_date':
        return this.setState({auction: { ...this.state.auction, end_date: value }});
      case 'reserve_price':
        return this.setState({auction: { ...this.state.auction, reserve_price: value }});
      default:
        return this.state
    }
  };
  
  componentDidMount() {
    console.log(this.state)
  };
  
  render() {
    return (
      <form className="AuctionForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label> <br/>
          <input 
            name="title" 
            id="title"
            onChange={this.handleChange} 
            value={this.state.auction.title}
          />
        </div>
        <div>
          <label htmlFor="details">Details</label><br/>
          <textarea 
            name="details" 
            id="details" 
            cols="60" rows="4"
            onChange={this.handleChange} 
            value={this.state.auction.details}
          />
        </div>
        <div>
          <label htmlFor="end_date">Ends on</label><br/>
          <input 
            type="date" 
            name="end_date" 
            id="end_date" 
            cols="60" rows="4"
            onChange={this.handleChange} 
            value={this.state.auction.end_date}
          />
        </div>
        <div>
          <label htmlFor="reserve_price">Reserve Price $</label><br/>
          <input 
            type="text" 
            pattern="[0-9]*" 
            name="reserve_price" 
            id="reserve_price" 
            cols="60" rows="4"
            onChange={this.handleChange} 
            value={this.state.auction.reserve_price}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
};

export default AuctionForm;
