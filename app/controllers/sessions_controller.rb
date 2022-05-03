class SessionsController < ApplicationController
   skip_before_action :authorized_account, only: [:login]

   def login
      account = Account.find_by(email:params[:email])
      if account&.authenticate(params[:password])
          session[:id] = account.id
          render json: account, status: :ok
      else
          render json: {error: "Invalid Password or Email"}, status: :unauthorized
      end
  end

  def authorized
      render json: loggedIn_account
  end

  def destroy
      session.delete :id
      render json: {seccess: :ok}, status: :ok
  end
end
