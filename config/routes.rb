Rails.application.routes.draw do
  resources :users
  resources :flights
  resources :airplanes

  root 'pages#home'
end
