class Reservation < ActiveRecord::Base
  belongs_to :user_doctor_id, class_name: "User"
  belongs_to :user_patient_id, class_name: "User"
  belongs_to :user_receive_id, class_name: "User"
  
  # Required fields
  validates :appointment_date, :status, presence: true
end
