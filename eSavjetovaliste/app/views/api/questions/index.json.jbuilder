json.array!(@questions) do |question|
  json.extract! question, :id, :name, :question, :description, :user_id, :category_id
  json.url api_question_url(question, format: :json)
end
