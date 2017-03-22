Rails.application.routes.draw do
  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :planets, only: [:index, :show]
    resources :reviews, only: [:create, :destroy]
    resources :requests, only: [:create, :destroy]
  end

end
