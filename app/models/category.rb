class Category < ActiveRecord::Base
	has_many :questions
	
	# Required fields
	validates :name, presence: true, length: {minimum: 3, maximum: 25}
	validates :description, presence: true

end
