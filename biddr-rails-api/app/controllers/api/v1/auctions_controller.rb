class Api::V1::AuctionsController < ApplicationController
  def create
    auction = Auction.new auction_params
    auction.save
    render json:auction  
  end

  private
  def auction_params
    params.require(:auction).permit(:title, :details, :end_date, :reserve_price)
  end
end
