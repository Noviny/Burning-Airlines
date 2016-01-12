json.array!(@users) do |user|
  json.extract! user, :id, :admin, :name, :password, :email
  json.url user_url(user, format: :json)
end
