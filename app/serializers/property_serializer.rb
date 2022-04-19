class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :price, :rooms, :bathrooms, :photo, :sqft, :lat, :lng
  has_one :account
end
