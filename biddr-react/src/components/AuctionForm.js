import React from "react";

const AuctionForm = props => {
  console.log(props)
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      details: formData.get("details"),
      ends_on: formData.get("ends_on"),
      reserve_price: formData.get("reserve_price")
    });
  };

  return (
    <form className="AuctionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" />
      </div>
      <div>
        <label htmlFor="details">Details</label>
        <textarea name="details" id="details" cols="60" rows="4" />
      </div>
      <div>
        {/* <label htmlFor="details">Details</label> <br />
        <textarea name="details" id="details" cols="60" rows="4" /> */}
      </div>
      <div>
        {/* <label htmlFor="details">Details</label> <br />
        <textarea name="details" id="details" cols="60" rows="4" /> */}
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AuctionForm;
