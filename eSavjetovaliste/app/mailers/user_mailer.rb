class UserMailer < MandrillMailer::TemplateMailer
  default from: "no-reply@esavjetovaliste.com"
  default from_name: "eSavjetovaliste"

  def registration_email(user)
  	@user = user
    mandrill_mail(
      template: 'Registration',
      to: @user.email, 
      subject: "eSavjetovaliste - Zahtjev za registraciju",
      vars: {
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
        'RESET_LINK' =>user.password_reset_token,
      }
    )
  end
end
