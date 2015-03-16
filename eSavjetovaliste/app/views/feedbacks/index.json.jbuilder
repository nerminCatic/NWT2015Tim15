json.array!(@feedbacks) do |feedback|
  json.extract! feedback, :id, :name, :description
  json.url feedback_url(feedback, format: :json)
end
