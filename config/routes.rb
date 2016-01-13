Rails.application.routes.draw do
  resources :users
  resources :flights
  resources :airplanes
  root 'pages#home'
  
  get '/user/edit' => 'users#edit'
  resources :users, :except => [:edit]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
