class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render(
        json: @review.errors.full_messages,
        status: 422
      )
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @user = @review.host
    @review.destroy

    render "api/users/show"
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :host_id, :body, :rating)
  end

end
