import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const AuctionForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      details: formData.get("details"),
      end_date: formData.get("end_date"),
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
        <label htmlFor="end_date">Ends on</label>
        <input type="date" name="end_date" id="end_date" cols="60" rows="4" />
      </div>
      <div>
        <label htmlFor="reserve_price">Reserve Price $</label>
        <input type="text" pattern="[0-9]*" name="reserve_price" id="reserve_price" cols="60" rows="4" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AuctionForm;
