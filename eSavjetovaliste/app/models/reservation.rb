class Reservation < ActiveRecord::Base
  belongs_to :user_doctor, class_name: "User"
  belongs_to :user_patient, class_name: "User"
  belongs_to :user_receive, class_name: "User"

  # Required fields
  validates :appointment_date, :status, presence: true
  
end
