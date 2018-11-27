const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    });
  },
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      return res.json()
    });
  },
  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "GET",
      header: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return res.json()
    });
  },
  update(params) {
    return fetch(`${BASE_URL}/auctions/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => {
      console.log(res)
      return res.json()
    }); 
  }
};

export const Bid = {
  all(id) {
    return fetch(`${BASE_URL}/auctions/${id}/bids`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      console.log(res)
      return res.json()
    });
  }
};