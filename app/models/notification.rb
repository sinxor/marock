class Notification < ActiveRecord::Base
  belongs_to :recipient, class_name: "User"
  belongs_to :actor, class_name: "User"
  belongs_to :notifiable, polymorphic: true

  scope :pristine, -> { where(is_new: true) }
  scope :recent, -> { order(created_at: :desc) }
  scope :unread, -> { where(read_at: nil) }
end
