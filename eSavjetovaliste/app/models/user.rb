class User < ActiveRecord::Base
  before_create :generate_authentication_token
  belongs_to :role  
  has_many :reservations

  has_secure_password

  # Required fields and lengths
	validates :name, presence:true, length: {minimum: 3, maximum: 20}
	validates :surname, presence:true, length: {minimum: 3, maximum: 25}
	validates :role_id, presence:true
  validates :password, length: { minimum: 3 }, allow_nil: true
  
  # Not required fields and lengths
	validates :job, length: {minimum: 2, maximum: 35}

  # Validation for email
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, length: {minimum: 5, maximum: 255}, format: { with: VALID_EMAIL_REGEX },
	                    uniqueness: { case_sensitive: false }

  validates :auth_token, uniqueness: true

  def generate_authentication_token
      begin
        self.auth_token = Devise.friendly_token
      end while self.class.exists?(auth_token: auth_token)
    end
end
