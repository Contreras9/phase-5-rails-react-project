class AccountsController < ApplicationController
   skip_before_action :authorized_account, only: []

   def create
      account = Account.create!(account_params)
      session[:email] = coder.email
      render json: coder, status: :created
  end


  private

  def account_params
      params.permit(:first_name, :last_name, :email, :password, :url)
  end
end
