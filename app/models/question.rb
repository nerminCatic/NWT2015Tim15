class Question < ActiveRecord::Base
 	belongs_to :user
  	belongs_to :category
  	has_many :comments
  	has_many :uploads

	 # Required fields
	 validates :name, presence:true, length: {minimum: 3, maximum: 25}
	 validates :description, presence: true, length: {minimum: 5, maximum: 100}
	 #validates :category_id, presence:true
	 #validates :user_id, presence:true
	 def number_of_comments
	 	comments.count
	 end
	 def time_created
	 	created_at.strftime("%d.%m.%Y   %H:%M")
	 end

	 def self.chart
	     my_values = []
	     Question.all.each do |c|
	      my_values << {:label => c.name, :value => c.comments.count }
	     end
	      @collection = [
	        { :key => "Question",
	         :values => my_values
	        }
	      ]
      end
end

