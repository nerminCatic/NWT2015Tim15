class Question < ActiveRecord::Base
 	belongs_to :user
  	belongs_to :category
  	has_many :comments

	 # Required fields
	 validates :name, presence:true, length: {minimum: 3, maximum: 25}
	 validates :question, presence: true, length: {minimum: 5, maximum: 100}
	 validates :category_id, presence:true
	 validates :user_id, presence:true
end