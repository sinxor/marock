module PostsHelper
  def post_length_in_minutes(body)
    min = body.split(" ").size / 250
    if min == 0
      "#{I18n.t("lessthanaminuteread")}"
    else
      "#{min} min #{I18n.t("read")}"
    end
  end

  def remove_script_tag(html)
    html.gsub(/<script.*?>[\s\S]*<\/script>/i, "")
  end
end
