class AddUserReferencesInReservations < ActiveRecord::Migration
  def change
  	add_reference :reservations, :user_receive, references: :user
  	add_reference :reservations, :user_doctor, references: :user
  	add_reference :reservations, :user_patient, references: :user
  end
end
