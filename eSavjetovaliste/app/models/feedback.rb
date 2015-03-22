class Feedback < ActiveRecord::Base
	# Required fields
	validates :name, presence: true, length: {minimum: 3, maximum: 25}
	validates :description, presence: true
end
