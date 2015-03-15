json.array!(@users) do |user|
  json.extract! user, :id, :name, :surname, :role_id, :adress, :phone, :job, :title
  json.url user_url(user, format: :json)
end
