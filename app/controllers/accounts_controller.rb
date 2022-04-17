class AccountsController < ApplicationController
   skip_before_action :authorized_account, only: [:create]

   def create
      account = Account.create!(account_params)
      session[:id] = account.id
      render json: account, status: :created
  end


  private

  def account_params
      params.permit(:first_name, :last_name, :email, :password)
  end
end
