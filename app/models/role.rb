class Role < ActiveRecord::Base
	has_many :users
	
	# Required fields
    validates :name,  presence: true, length: {minimum: 2, maximum: 20}
    validates :description, presence: true, length: {minimum: 2, maximum: 50}

    def self.chart
   	 my_values = []
   	 Role.all.each do |c|
   		my_values << {:label => c.name, :value => c.roles.count }
   	 end
    	@collection = [
      	{ :key => "Role",
     		 :values => my_values
      	}
    	]
      end

end
