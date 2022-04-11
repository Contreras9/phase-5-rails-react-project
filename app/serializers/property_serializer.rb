class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :price, :rooms, :bathrooms, :photo
  has_one :account
end
