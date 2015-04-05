class Api::PasswordresetsController < ApplicationController
  def new
  end
  def create
    logger.debug("111111111111111111111111111111111")
    user_email = params[:email]
    user = user_email.present? && User.find_by(email: user_email)

    user.send_password_reset 
    if user
	    redirect_to root_url, :notice => "Poslan Vam je e-mail sa instrukcijama za reset lozinke.";
	    render json: user, status: 200
    else
          render json: { errors: "Invalid email"}, status: 422
    end


      #if user
      #    render json: user, status: 200
      #else
      #    render json: { errors: "Invalid email"}, status: 422
      #end
  end
end
