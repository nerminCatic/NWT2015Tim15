json.array!(@comments) do |comment|
  json.extract! comment, :id, :name, :comment, :description, :user_id, :question_id

end
