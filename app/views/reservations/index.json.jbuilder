json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :flight_id, :seat
end
