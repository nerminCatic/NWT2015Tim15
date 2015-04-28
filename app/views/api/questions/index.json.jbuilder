json.array!(@questions) do |question|
  json.extract! question, :id, :name, :description, :user, :category
  json.url api_question_url(question, format: :json)
end
