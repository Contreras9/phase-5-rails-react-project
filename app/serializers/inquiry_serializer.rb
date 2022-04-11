class InquirySerializer < ActiveModel::Serializer
  attributes :id, :account_id, :property_id, :price, :message
end
