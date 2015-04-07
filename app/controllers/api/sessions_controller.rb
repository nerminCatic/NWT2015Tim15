class Api::SessionsController < ApplicationController
  def create
    user_password = params[:password]
    user_email = params[:email]
    user = user_email.present? && User.find_by(email: user_email)

    if user.try(:authenticate, user_password) && user.is_confirmed
        #log_in user
        session[:user_id] = user.id
        render json: user, status: 200
    else
        render json: { errors: "Invalid email or password"}, status: 422
    end
  end


  # Should be deleted!

  def current_user
    #@current_user ||= User.find_by(id: session[:user_id])
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user, status: 200
    else 
      render json: { message: "No logged users."}, status: 200
    end
  end
  def log_out
    session[:user_id] = nil
    #log_out if logged_in?
    #redirect_to root_url
    render json: { message: "Logged out."}, status: 200
  end


end
