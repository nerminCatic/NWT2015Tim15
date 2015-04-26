class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :question

   # Required fields
   validates :name, presence: true, length: {minimum: 3, maximum: 25}
   validates :comment, presence: true
   validates :user_id, presence: true
   validates :question_id, presence: true
end