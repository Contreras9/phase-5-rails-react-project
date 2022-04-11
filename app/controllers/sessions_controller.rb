class SessionsController < ApplicationController
   skip_before_action :authorized_account, only: [:login]

   def login
    
      account = Account.find_by(email:params[:email])
      if account&.authenticate(params[:password])
          session[:email] = account.email
          render json: coder, status: :ok
      else
          render json: {error: "Invalid Password or Email"}, status: :unauthorized
      end
  end

  def authorized
      render json: loggedIn_account
  end

  def destroy
      session.delete :email
  end
end
