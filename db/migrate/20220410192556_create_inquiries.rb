class CreateInquiries < ActiveRecord::Migration[6.1]
  def change
    create_table :inquiries do |t|
      t.integer :account_id
      t.integer :property_id
      t.integer :price
      t.string :message

      t.timestamps
    end
  end
end
