class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :price, :rooms, :bathrooms, :photo
  has_one :account
end
