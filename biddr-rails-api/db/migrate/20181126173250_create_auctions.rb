class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :details
      t.date :end_date
      t.integer :reserve_price
      t.integer :final_sale_price

      t.timestamps
    end
  end
end
