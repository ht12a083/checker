class ChannelController < ApplicationController
	def fc2
		@bookmarkForm = current_user.created_bookmarks.build
	end
end
