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

};