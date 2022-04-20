class PropertySerializer < ActiveModel::Serializer
  attributes :id, :property_status, :home_status, :address, :city, :state, :zipcode, :price, :rooms, :bathrooms, :photo, :sqft, :lat, :lng, :home_type, :detail_url, :time_on_zillow
  has_one :account
end
