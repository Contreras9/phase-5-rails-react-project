class PropertiesController < ApplicationController
   has_many: inquiries
   has_many: :accounts, through: :inquiries

end
