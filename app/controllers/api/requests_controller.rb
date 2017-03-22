class Api::RequestsController < ApplicationController

  def create
    @request = Request.new(request_params)

    if @request.save
      render :show
    else
      render(
        json: @request.errors.full_messages,
        status: 422
      )
    end
  end

  def index
    @requests = current_user.requests_made
    render :index
  end

  def destroy

  end

  private

  def request_params
    params.require(:request).permit(
      :guest_id,
      :host_id,
      :arrive_date,
      :depart_date,
      :num_travelers
    )
  end

end
