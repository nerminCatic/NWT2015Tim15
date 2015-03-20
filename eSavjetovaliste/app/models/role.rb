class Role < ActiveRecord::Base
	has_many :users
	
	# Required fields
    validates :name, :description, presence: true
end
