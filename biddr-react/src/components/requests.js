const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  create(params) {
    return fetch(`${BASE_URL}/auction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      return res.json()
    });
  },

};