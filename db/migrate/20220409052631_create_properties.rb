class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.references :account, null: false, foreign_key: true
      t.integer :property_type
      t.string :property_status
      t.string :address
      t.string :price
      t.integer :rooms
      t.integer :bathrooms
      t.string :photo
      t.integer :sqft
      t.string :zipcode
      t.string :city
      t.string :state
      t.string :home_type
      t.string :home_status
      t.decimal :lat
      t.decimal :lng
      t.string :detail_url
      t.string :time_on_zillow

      t.timestamps
    end
  end
end
