class Property < ApplicationRecord
  belongs_to :account
  
  has_many :inquiries
  has_many :accounts, through: :inquiries
end
