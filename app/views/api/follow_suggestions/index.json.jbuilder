json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.avatar_image_tag avatar_for(user, size: 50)
  json.description user.description
  #json.urlPath user_path(user)
  #json.urlPath "/#{I18n.locale}/users/#{user.slug}"
  json.slug user.slug
  json.following current_user.following?(user)
end
