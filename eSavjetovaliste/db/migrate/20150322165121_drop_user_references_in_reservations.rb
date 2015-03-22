class DropUserReferencesInReservations < ActiveRecord::Migration
  def change
  	remove_reference :reservations, :user_receive, index: true
  	remove_reference :reservations, :user_doctor, index: true
  	remove_reference :reservations, :user_patient, index: true
  end
end
