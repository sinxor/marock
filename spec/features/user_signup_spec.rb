require "rails_helper"

feature "User signs up" do
    scenario "successfully" do
      visit root_path
      click_on "Join us"
      fill_in "Email", with: "example@user.com"
      fill_in "Password", with: "password"
      fill_in "Password confirmation", with: "password"
      click_on "Create Account"
      expect(page).to have_content "Welcome! You have signed up successfully."
      expect(page).to have_content "Sign out"
      expect(page).not_to have_content "Sign up"
    end
end
