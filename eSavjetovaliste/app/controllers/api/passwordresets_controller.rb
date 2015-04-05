class Api::PasswordresetsController < ApplicationController
  def new
  end
  def create
    user_email = params[:email]
    user = user_email.present? && User.find_by(email: user_email)

    user.send_password_reset(user) 
    if user
	    render json: user, status: 200
    else
          render json: { errors: "Invalid email"}, status: 422
    end
  end

  def edit
  	user = User.find_by(password_reset_token: params[:password_reset_token])
  	if user
	    render json: user, status: 200
    else
          render json: { errors: "Invalid email"}, status: 422
    end
  end

  def update
  	logger.debug("222222222222")
  	@user = User.find_by_password_reset_token!(params[:id])
  	if @user.password_reset_sent_at < 2.hours.ago
  		
  	end
  end
end
