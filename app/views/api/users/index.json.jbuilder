json.array!(@users) do |user|
  json.extract! user, :id, :name, :surname, :role_id, :adress, :phone, :job, :confirmed
  json.url api_user_url(user, format: :json)
end