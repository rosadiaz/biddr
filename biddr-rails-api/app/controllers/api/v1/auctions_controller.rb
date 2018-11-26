class Api::V1::AuctionsController < ApplicationController
  def create
    auction = Auction.new auction_params
    auction.save
    render json:auction  
  end

  def index
    auction = Auction.all
    render json: auction
  end

  def show
    auction = Auction.find params[:id]
    render json: auction
  end

  def destroy
    auction = Auction.find params[:id]
    auction.destroy
    render json: {status: :success}
  end

  private
  def auction_params
    params.require(:auction).permit(:title, :details, :end_date, :reserve_price)
  end
end
