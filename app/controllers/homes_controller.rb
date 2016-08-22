class HomesController < ApplicationController
  def show
  end

  private

  def check_logged_in_user
    redirect_to dashboard_url if user_signed_in?
  end
end
