class Api::PasswordresetsController < ApplicationController
  #before_filter :restrict_api_access
  def new
  end
  
  
  #service for sending request for reset password
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
    #provjera da li postoji user sa ovim password_reset_token-om
    # TBD hashiranje
    user = User.find_by!(password_reset_token: params[:id])
    token = params[:id]
    if user
      #proslijedjivanje na unos novog passworda ukoliko je token validan
      redirect_to "/#/inputs-password-reset/#{token}"
    else
      render json: { errors: "Invalid email"}, status: 422
    end
  end

  #service for reseting password
  def update
    user_new_password = params[:password]
    user_new_password_confirmation = params[:password_confirmation]
    user = User.find_by!(password_reset_token: params[:id])
    if user 
      if user.password_reset_sent_at > 2.hours.ago
        user.password = user_new_password
        user.password_confirmation = user_new_password_confirmation
        user.save
        render json: user, status: 200       
      end 
    else
        render json: { errors: "This link is invalid."}, status: 404
    end
  end
end
#komentar