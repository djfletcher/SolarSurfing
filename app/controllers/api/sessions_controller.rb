class Api::SessionsController < ApplicationController

  def create
    @user = User.validate_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render(
        json: ["Invalid username or password"],
        status: 401
      )
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render(
        json: ["No one is currently logged in"],
        status: 404
      )
    end
  end

end
