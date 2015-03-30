class Api::SessionsController < ApplicationController
  def create
      user_password = params[:password]
      user_email = params[:email]
      user = user_email.present? && User.find_by(email: user_email)

      if user.try(:authenticate, user_password)
          render json: user, status: 200, location: [:api, user]
      else
          render json: { errors: "Invalid email or password"}, status: 422
      end
    end

    def destroy
      user = User.find_by(auth_token: params[:id])
      user.generate_authentication_token!
      user.save
      head 204
  end
end
