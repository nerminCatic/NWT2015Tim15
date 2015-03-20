json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :user_id, :appointment
  json.url api_reservation_url(reservation, format: :json)
end
