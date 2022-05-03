class PropertiesController < ApplicationController
   before_action :authorized_account, only: [:my_properties, :update, :destroy]
   skip_before_action :authorized_account, only: [:show, :search, :create]

   def index
      render json: Property.all, status: :ok
   end

   def show
      property = Property.find(params[:id])
      render json: property, status: :ok
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
      property = Property.create!(property_params.merge({account_id: session[:id]}))
      render json: property, status: :created
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
      params.permit(:property_type, :property, :address, :price, :rooms, :bathrooms, :photo, :sqft, :zipcode, :city, :state, :photo)
   end


end