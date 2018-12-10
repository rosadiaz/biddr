# Biddr - a bidding website with a Rails JSON API and a React client.

Part 1: Rails Web API – Auction & Bid CRUD

Build a Rails JSON API.
Implement create, show, index and destroy actions for Auctions.
Auctions should have many Bids.
Implement the create action for Bids.
You should use Postman to manually test your API.

Build a React Client for the JSON API.

Implement a WelcomePage, an AuctionsIndexPage and AuctionsShowPage. Only the AuctionsShowPage is illustrated in the wireframes.
Create a NavBar to navigate between pages.

Pending: 
User Authentication
Implement a SessionsController with a create action to allows users to login with a session cookie and a destroy action to logout.
Only authenticated users can create & destroy Auctions.
Only authenticated users can create bids.
Associate users to auctions and bids they create.
Disallow users from bidding on their own auctions.

React Client – Authenticated Routes
Implement a SignInPage. Add a link to it to the NavBar.
Only show the SignInPage link if the user is not signed in. Otherwise, display their name.
Redirect users that are not signed in to the SignInPage when they attempt to access any route that requires authentication.

Implement the AuctionsNewPage shown below to allow authenticated users to create bids.
Implement the ability to bid on auctions from the AuctionsShowPage.

Auction States
Add support for states, draft, published & reserve met, to the auction model.
When created an auction should be set to the draft state. In draft state, the auction is only visible to the author.
Implement a Publish button, only visible to the author of the auction, in the AuctionShowPage.
When clicked, this sets the auction's state to published. All published auctions should be visible.

Add the ability for users to sign up from the frontend client.
Implement a UserController with a create action to allow users to sign up through the API. Creating a user should also sign in the user meaning that the create action must return a JWT.
Implement a SignUpComponent to create a user.
Add a link to the SignUpComponent in the NavBar if the user isn't signed in.
