class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_account
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def loggedIn_account
    account.find_by(email:session[:email])
  end

  def authorized_account
    render json: { error: "Not Authorized" }, status: :unauthorized unless loggedIn_account
  end
  
  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {error: "#{error.model} not found"}, status: :not_found
  end
end

end
