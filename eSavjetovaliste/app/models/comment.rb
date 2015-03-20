class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :question

   # Required fields
   validates :name, :comment, presence: true
end
