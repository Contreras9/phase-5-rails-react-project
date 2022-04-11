Rails.application.routes.draw do
  
  resources :inquiries
  get 'dashboard/index'
  get 'public/index'
  resources :properties
  resources :accounts
  post "/login", to: "sessions#login"
  root to: 'public#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
