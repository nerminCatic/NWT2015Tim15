json.array!(@comments) do |comment|
  json.extract! comment, :id, :name, :comment, :description, :user_id, :question_id
  json.url comment_url(comment, format: :json)
end
