class UserMailer < MandrillMailer::TemplateMailer
  default from: "no-reply@esavjetovaliste.com"
  default from_name: "eSavjetovaliste"

  def registration_email(user)
  	@user = user
    mandrill_mail(
      template: 'Registration',
      to: @user.email, 
      subject: "eSavjetovaliste - Potvrda registracije",
      vars: {
        #
        #/api/users/confirm?token=<%= @user.generate_auth_token
        'CONFIRMATION_LINK' => root_url + "/api/users/" + @user.generate_auth_token + "/confirm",
        'IME_USERA' => @user.name,
      }
    )
  end

  def reset_pass_email(user)
    @user = user
    mandrill_mail(
      template: 'ResetPassword',
      to:   @user.email, 
      subject: "eSavjetovaliste - Reset lozinke",
      vars: {
        'RESET_LINK' => root_url + "/api/passwordresets/" + @user.password_reset_token + "/edit",
      }
    )
  end
end
