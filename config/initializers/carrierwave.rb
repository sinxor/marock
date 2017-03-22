require 'carrierwave/orm/activerecord'

if Rails.env.production?
  CarrierWave.configure do |config|
      config.storage    =  :aws                  # required
      config.aws_bucket =  ENV['S3_BUCKET']      # required
      config.aws_acl    =  :public_read

      config.aws_credentials = {
        access_key_id:      ENV['S3_ACCESS_KEY'],       # required
        secret_access_key:  ENV['S3_SECRET_KEY'],     # required
        region:             ENV['AWS_REGION'] # Required
      }

      config.aws_attributes = {
                   expires: 1.week.from_now.httpdate,
                   cache_control: 'max-age=604800'
      }
  end
end
