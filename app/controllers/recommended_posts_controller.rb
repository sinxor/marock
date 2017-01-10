class RecommendedPostsController < ApplicationController
  def index
    @user = User.friendly.find(params[:user_id])
    @recommended_posts = @user.liked_posts.published.paginate(page: params[:page])
  end
end
