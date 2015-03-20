class Question < ActiveRecord::Base
 	belongs_to :user
  	belongs_to :category
  	has_many :comments

	 # Required fields
	 validates :name, :question, presence: true
end
