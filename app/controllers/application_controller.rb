class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_account
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def loggedIn_account
    Account.find_by(id:session[:id])
  end

  def authorized_account
    render json: { error: "Not Authorized" }, status: :unauthorized unless session[:id]
  end
  
  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {error: "#{error.model} not found"}, status: :not_found
  end

end
