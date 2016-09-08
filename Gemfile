source 'https://rubygems.org'


gem 'rails', '4.2.6'
gem 'pg', '~> 0.15'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'

gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
gem 'carrierwave', '0.10.0'
gem 'mini_magick', '3.8.0'
gem 'fog',  '1.23.0'
gem 'net-ssh'
gem 'devise', '~> 3.5.3'
gem 'bootstrap-sass', '~> 3.3.6'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-rails','~> 3.4.2'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'


  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'guard-rspec', require: false
end

group :test do
  gem 'capybara', '~> 2.5.0'
  gem 'database_cleaner', '~> 1.5.1'
  gem 'factory_girl_rails', '~> 4.5.0'
  gem 'faker', '~> 1.6.1'
end

group :production do
  gem 'rails_12factor', '0.0.2'
end
