class Api::AuthController < ApplicationController
  skip_before_action :authenticate_request
  respond_to :json
# Authenticate
  def authenticate
  	user_password = params[:password]
    user_email = params[:email]
    user = user_email.present? && User.find_by(email: user_email)

    if user.try(:authenticate, user_password) && user.is_confirmed
      render json: { auth_token: user.generate_auth_token }, status: 200
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
# Find current user
  def current_user
    if decoded_auth_token
      @current_user = User.find(decoded_auth_token[:user_id])
    end
    render json: { user: @current_user }, status: 200
  end
# Token status?
  def token_status
    token = params[:token]
    if AuthToken.valid? token
      head 200
    else
      head 401
    end
  end
  
end
