class Api::PlanetsController < ApplicationController

  def index
    @planets = Planet.all
    render :index
  end

  def show
    @planet = Planet.find(params[:id])
    render :show
  end

end
