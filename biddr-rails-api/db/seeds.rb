Bid.delete_all
Auction.delete_all

NUM_OF_AUCTIONS = 20
NUM_OF_BIDS = rand(50) + 1

NUM_OF_AUCTIONS.times do
  auction = Auction.create(
    title: Faker::Food.dish,
    details: Faker::Food.description,
    end_date: '2019-04-04',
    reserve_price: rand(1000) +1,
  )
  rand(1..10).times do
    bid = Bid.create(
      bid_price: Faker::Number.between(1, 100)
    )
    auction.bids << bid
  end
end



total_auctions = Auction.all
total_bids = Bid.all

puts("*********************************************")
puts ("Auctions = ")
puts (total_auctions.count)
puts ("Bids = ")
puts (total_bids.count)
puts("*********************************************")