class PropertiesController < ApplicationController
   before_action :authorized_account, only: [:my_properties, :create, :update, :destroy]
   skip_before_action :authorized_account, only: [:search]

   def index
      render json: Property.all, status: :ok
   end

   def my_properties
      properties = Property.where("account_id = :account_id", {account_id: session[:id]})
      render json: properties, status: :ok
   end

   def search
      properties = Property.where("(city LIKE :location OR zipcode LIKE :location) AND (:property_type = 0 OR property_type = :property_type)", {location: ("%" + params["location"] + "%"), property_type: params["property_type"]})
      render json: properties, status: :ok
   end

   def create
      properties = Property.create!(property_params)
      property.account_id = session[:id]
      property.save
      render json: properties, status: :created
   end

   def destroy
      property = Property.find(params[:id])
      if (property.account_id == session[:id])
      property.destroy
      render json: {success: "success"}, status: :ok
      else render json: {error: "Not Athorized" },status: :unauthorized
      end
   end

   private

   def property_params
      params.permit(:property_type, :address, :price, :rooms, :bathrooms, :photo, :sqft, :zipcode, :city)
   end


end