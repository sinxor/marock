json.new_notification_count @new_notification_count
json.next_page @notifications.next_page
json.notifications do |json|
  json.array! @notifications do |notification|
    json.id notification.id
    json.actor notification.actor.username
    json.actor_avatar_img_tag avatar_for(notification.actor, size: 40)
    json.action notification.action


    json.type notification.notifiable.class.to_s.underscore.humanize.downcase

    json.slug case notification.notifiable.class.to_s
            when "Post" then notification.notifiable.slug
            when "User" then notification.notifiable.slug
            when "Response" then notification.notifiable.post.slug
            end
    json.time_ago time_ago_in_words(notification.created_at)
    json.unread notification.read_at.nil?
  end
end
