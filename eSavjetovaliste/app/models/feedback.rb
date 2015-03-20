class Feedback < ActiveRecord::Base
	# Required fields
	validates :name, :description, presence: true
end
