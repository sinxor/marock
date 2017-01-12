class TagsController < ApplicationController
  before_action :set_tag

  def show
    @dashboard = Dashboard.new(user: current_user, posts: tagged_posts, tag: @tag)
  end

  private

    def set_tag
      @tag = Tag.friendly.find(params[:id])
    end

    def tagged_posts
      @_tagged_posts ||= Post.tagged_with(@tag.name).published.paginate(page: params[:page])
    end
end
