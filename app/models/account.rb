class Account < ApplicationRecord
   has_secure_password

   has_many :inquiries
   has_many :properties, through: :inquiries

   validates :email, presence: true, uniqueness: true
end
