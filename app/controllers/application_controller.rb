class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  layout :which_layout

  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  before_filter :set_locale

  protected

    def configure_permitted_parameters
       devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
       devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:login, :username, :email, :password, :remember_me) }
       devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :current_password, :avatar, :avatar_cache) }
    end

    def mobile_device?
      if session[:mobile_param]
        session[:mobile_param] == "1"
      else
        request.user_agent =~ /Mobile|webOS/
      end
    end

    def which_layout
      mobile_device? ? 'mobile' : 'application'
    end

    def set_locale
      I18n.locale = params[:locale] if params[:locale].present? || I18n.default_locale
    end

    def default_url_options(options = {})
      {locale: I18n.locale}
    end

    def current_user?(user)
      current_user.id == user.id
    end

    helper_method :current_user?
end
