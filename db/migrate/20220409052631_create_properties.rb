class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.references :account, null: false, foreign_key: true
      t.integer :property_type
      t.string :address
      t.string :price
      t.integer :rooms
      t.integer :bathrooms
      t.string :photo
      t.integer :sqft
      t.string :zipcode
      t.string :city
      t.decimal :lat
      t.decimal :lng

      t.timestamps
    end
  end
end
