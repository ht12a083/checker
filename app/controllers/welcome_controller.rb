class WelcomeController < ApplicationController
  def index
  	@now = Time.zone.now
  	if current_user
  		@bookmark = Bookmark.where("user_id = '#{current_user.id}'")
  		@bookmarkForm = current_user.created_bookmarks.build
  	end
  	@bookmarkAll = Bookmark.all
  end
end
