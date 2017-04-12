source 'https://rubygems.org'


gem 'rails', '4.2.6'
gem 'puma', '~> 2.15'
gem 'pg', '~> 0.15'
gem 'devise', '~> 3.5.3'
gem 'omniauth-facebook', '~> 4.0'
gem 'omniauth-google-oauth2', '~> 0.3.1'
gem 'omniauth-twitter', '~> 1.2'
gem 'react-rails', '~> 1.10'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'sass-rails', '~> 5.0'
gem 'font-awesome-sass', '~> 4.5'
gem 'uglifier', '>= 1.3.0'
gem 'autoprefixer-rails', '~> 6.3'

gem 'rack-cors', :require => 'rack/cors'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
#gem 'turbolinks'

gem 'coffee-rails', '~> 4.2.1'
gem 'jquery-rails'
gem 'jquery-ui-rails', '~> 5.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
gem 'friendly_id', '~> 5.1'

gem 'carrierwave', '0.10.0'
gem 'mini_magick', '3.8.0'
#gem 'fog',  '1.38.0'
gem 'carrierwave-aws'
gem 'net-ssh'


# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# Load will_paginate before elasticsearch gems.
gem 'will_paginate', '~> 3.1'
#elasticsearch
gem 'elasticsearch-model', '~> 0.1.8'
gem 'elasticsearch-rails', '~> 0.1.8'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Background Job
gem 'sidekiq', '~> 4.0'

gem 'sinatra', require: false
gem 'slim'
#gem 'sidetiq', '~> 0.7.0'

gem 'nokogiri', '~> 1.6'
gem 'i18n'
gem 'i18n-js'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-rails','~> 3.5'
  gem 'poltergeist', '~> 1.8'
  gem 'awesome_print', '~> 1.6'

end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views

  gem 'rack-mini-profiler', '~> 0.9.8', require:false

  gem 'rails_best_practices', '~> 1.15'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'guard-rspec', require: false
  gem 'spring-commands-rspec', '~> 1.0'
  gem 'bullet', '~> 5.0'
  gem 'annotate'
end

group :test do
  gem 'capybara', '~> 2.5.0'
  gem 'database_cleaner', '~> 1.5.1'
  gem 'factory_girl_rails', '~> 4.5.0'
  gem 'faker', '~> 1.6.1'
end

group :production do
  gem 'rails_12factor', '0.0.2'
  gem 'bonsai-elasticsearch-rails'

end
