require "rails_helper"


feature "Editing profile" do
  let(:user) { create(:user) }
  before :each do
    sign_in user
end

  scenario "current user successfully edit his/her own" do
    visit edit_user_path(user)
    fill_in "Username", with: "New Username"
    fill_in "Description", with: "Awesome Developer"
    click_on "Save"

    expect(page).to have_content "New Username"
    expect(page).to have_content "Awesome Developer"
  end
end
