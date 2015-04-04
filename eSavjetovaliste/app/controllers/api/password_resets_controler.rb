class Api::PasswordResetsController < ApplicationController
  respond_to :json
  def new
  end

  def create
    logger.debug("111111111111111111111111111111111")
    user = User.find_by(email: params[:email])   
    user.send_password_reset 
    if user
    redirect_to root_url, :notice => "Poslan Vam je e-mail sa instrukcijama za reset lozinke.";
    render json: { errors: "la la la"}
  end
end