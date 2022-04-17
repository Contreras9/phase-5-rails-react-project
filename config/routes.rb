Rails.application.routes.draw do
  
  resources :inquiries
  get 'dashboard/index'
  get 'public/index'
  resources :properties, only: [:show, :create, :destroy]
  resources :accounts, only: [:create]
  post "/login", to: "sessions#login"
  post "/search", to: "properties#search"
  get "/myproperties", to: "properties#my_properties"
  root to: 'public#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
