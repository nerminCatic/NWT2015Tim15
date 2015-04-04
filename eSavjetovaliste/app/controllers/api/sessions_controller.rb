class Api::SessionsController < ApplicationController
  def create
      user_password = params[:password]
      user_email = params[:email]
      user = user_email.present? && User.find_by(email: user_email)

      if user.try(:authenticate, user_password)
          log_in user
          render json: user, status: 200
          
      else
          render json: { errors: "Invalid email or password"}, status: 422
      end
    end

    def destroy
      log_out if logged_in?
      redirect_to root_url
  end
end
