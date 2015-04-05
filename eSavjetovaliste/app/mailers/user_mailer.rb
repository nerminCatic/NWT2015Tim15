class UserMailer < MandrillMailer::TemplateMailer
  default from: "no-reply@esavjetovaliste.com"
  default from_name: "eSavjetovaliste"
#Komentar
  def registration_email(user)
  	@user = user
    mandrill_mail(
      template: 'Registration',
      to: @user.email, 
      subject: "eSavjetovaliste - Zahtjev za registraciju",
      vars: {
        'IME_USERA' => '<a>www.google.ba</a>',
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
        'RESET_LINK' => "http://localhost:3000/api/passwordresets/" + @user.password_reset_token + "/edit",
      }
    )
  end
end
