class BookmarksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_bookmarkable

  def create
    current_user.add_bookmark_to(@bookmarkable)
    respond_to do |format|
      format.html { redirect_to :back }
      format.js
    end
  end

  def destroy
    Bookmark.find(params[:id]).destroy
    current_user.remove_bookmark_from(@bookmarkable)
    respond_to do |format|
      format.html { redirect_to :back }
      format.js
    end
  end
  private

    def set_bookmarkable
      raise NotImplementedError, "This #{self.class} cannot respond to 'set_bookmarkable'"
    end
end
