class Api::V1::BidsController < ApplicationController
  def create
    auction = Auction.find params[:auction_id]
    bid = Bid.new bid_params
    bid.auction = auction
    
    bid.save
    render json:bid
  end

  private
  def bid_params
    params.require(:bid).permit(:bid_price)  
  end
end
