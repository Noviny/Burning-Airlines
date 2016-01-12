json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_no, :origin, :destination, :date
  json.url flight_url(flight, format: :json)
end
