class Category < ActiveRecord::Base
	has_many :questions
	
	# Required fields
	validates :name, :description, presence: true
end
